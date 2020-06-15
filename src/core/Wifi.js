/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ThunderJS from './ThunderJS.js';

export default class Wifi {

    constructor(config) {
        this._thunderjs = new ThunderJS(config);

        this._networks = undefined
    }

    configs() {
        return this._thunderjs.call('WifiControl', 'configs')
    }

    deleteConfigs() {
        return this._thunderjs.call('WifiControl', 'configs').then( (configs) => {
            configs.forEach(config => {
                this._thunderjs.call('WifiControl', 'delete', { ssid : config.ssid })
            })
        })
    }

    getNetwork(ssid) {
        if (this._networks === undefined)
            return undefined

        return this._networks.filter(n => {
            if (n.name === ssid)
                return true
        })[0]
    }

    networks() {
        return new Promise( (resolve, reject) => {
            let _getWifiNetworks = () => {
                this._thunderjs.call('WifiControl', 'networks')
                    .then( data => {
                        if (data === undefined || data.length === undefined || data.length === 0)
                            return;

                        this._networks = data.filter( n => {
                            if (n.ssid && n.ssid !== '')
                                return true
                            else
                                return false
                        }).map( n => {
                            // the version I have has something weird with the signal strength, lets work around it, looks like an long int rollover of 4294967295
                            if (n.signal > 4294967000)
                                n.signal = 4294967295 - n.signal;

                            // signal is measured in -dBm, which ranges from -30 dBm is 100% to -90dBm is 0%. However the value returned is positive
                            let signal = 0;
                            if (n.signal < 40)
                                signal = 100;
                            else if (n.signal < 50 && n.signal > 40)
                                signal = 90;
                            else if (n.signal < 60 && n.signal > 50)
                                signal = 75;
                            else if (n.signal < 70 && n.signal > 60)
                                signal = 50;
                            else if (n.signal > 80 && n.signal < 70)
                                signal = 25;
                            else
                                signal = 0;


                            let type;
                            if (n.pairs[0].method === 'WPA2' || n.pairs[0].method === 'WPA')
                                type = 'WPA';
                            else if (n.pairs[0].method === 'WEP')
                                type = 'Unknown';
                            else if (n.pairs[0].method === 'ESS')
                                type = 'Unsecure';
                            else
                                type = 'Unkown';

                            return { name : n.ssid, strength : signal, protected : n.pairs[0].method === 'ESS' ? false : true, type: type }
                        });

                        if (this._wifiControlScanListener)
                            this._wifiControlScanListener.dispose()

                        console.log(`Got ${this._networks.length} networks`);
                        resolve(this._networks);
                    });
            }

            this._wifiControlScanListener = this._thunderjs.on('WifiControl', 'scanresults', (data) => {
                _getWifiNetworks();
            });

            this._thunderjs.call('WifiControl', 'scan')
            setTimeout(_getWifiNetworks.bind(this), 2000)

        });
    }

    scanAndConnect(ssid, password, type) {
        return new Promise( (resolve, reject) => {
            this.networks()
            .then( (networks) => {
                    if (this.getNetwork(ssid) === undefined )
                        reject('Network does not exist')
                })
            .then( this.connect(ssid, password, type) )
            .then( resolve() )
        })
    }

    connect(ssid, password, type) {
        console.log(`Connecting to ${ssid} with psk: ${password} and type ${type}`);

        if (this._wifiConnectionListener)
            this._wifiControlScanListener.dispose(this._wifiConnectionListener)

        return this._thunderjs.call('WifiControl', `config@${ssid}`, {
            ssid : ssid,
            accesspoint : false,
            psk : password,
            type : type
        }).then( () => {
            this._wifiConnectionListener = this._thunderjs.on('WifiControl', 'connectionchange', () => {
                console.log('Succesfully connected to wifi, storing configuration');
                this._thunderjs.call('WifiControl', 'store')
                console.log('Getting IP on wlan0')
                // FIXME - we should be able to handle more then wlan0
                this._thunderjs.call('NetworkControl', 'request', { device: 'wlan0' })
            });

            this._thunderjs.call('WifiControl', 'connect', { ssid: ssid })
        })
    }
}