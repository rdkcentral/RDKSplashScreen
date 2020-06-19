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
import Wifi from './Wifi.js';

const CONNECTION_TIMEOUT = 15000
const WIFI_CONNECTION_TIMEOUT = 30000

export default class WPE {
    constructor(host, port, stage) {
        const config = {
            host: host,
            port: port
        };

        this._wifi = new Wifi(config);

        this._stage = stage;
        this._baseBootmanagerUrl = 'http://bootmanager.metrological.com'
        this._landingBaseBootPageDefault = 'rdk/landingpage'
        this.STATES = {
            NOIP: 1,
            HASIP: 2,
            HASTIME: 3,
            HASINTERNET: 4
        };

        this._state = this.STATES.NOIP;
        this._thunderjs = new ThunderJS(config);
        this._thunderjs.on('Controller', 'all', this._onMessage.bind(this));

        this._deviceId = undefined
        this._thunderjs.call('DeviceInfo', 'systeminfo').then( systeminfo => {
            this._deviceId = systeminfo.deviceid;
        })

        this._userCancelled = false;
        this._wifiWizard = false;
        document.addEventListener('keyup', this._keyHandler.bind(this))
    }

    init() {
        console.log('init')
        this._checkPlugins()
        this.check()
        setTimeout(this._noConnectionAfterTime.bind(this), CONNECTION_TIMEOUT);
    }

    _checkPlugins() {
        /*
        this._uxPlugin = undefined;
        this._wifiPlugin = undefined;
        this._state = this.STATES.NOIP;
        */
        this._thunderjs.call('Controller', 'status').then( _plugins => {
            for (let i=0; i < _plugins.length; i++) {
                let _p = _plugins[i]

                if (_p.callsign === 'UX') {
                    console.log('Found UX plugin');
                    this._uxPlugin = _p;
                }

                if (_p.callsign === 'WifiControl') {
                    console.log('Found WifiControl plugin')
                    this._wifiPlugin = _p;
                }
            }
        });
    }

    /*
     * Key handler
     */
    _keyHandler(e) {
        // cancelling is no longer available while the wifi screens are up
        if (this._wifiWizard === true)
            return

        if (e.keyCode === 13) {
            console.log('user cancelled')
            this._userCancelled = true;
            this._updateUIState('UserCancelled');
        }
    }

    /*
     * Failure handlers
     */
    _noConnectionAfterTime() {
        console.log('_noConnectionAfterTime')
        if (this._state !== this.STATES.HASINTERNET) {
            if (this._wifiPlugin === undefined) {
                this._updateUIState('NoConnection');
            } else {
                this._wifiWizard = true;
                this._checkAvailableWifiConfigs();
            }
        }
    }

    _noWiFiConnectionAfterTime() {
        console.log('_noWiFiConnectionAfterTime')
        if (this._state !== this.STATES.HASINTERNET) {
            this._updateUIState('WifiConnectError')
            // delete the config and render wifi list
            this._wifi.deleteConfigs().then( () => {
                this._wifi.networks().then( networks => {
                    this._wifiNetworks = networks
                    this._updateUIState('WifiLocations', networks);
                });
            })
        }
    }


    /*
     * WIFI
     */
    _checkAvailableWifiConfigs() {
        console.log('_checkAvailableWifiConfigs')

        this._wifi.configs().then( configs => {
            console.log('_checkAvailableWifiConfigs configs:', configs)
            if (configs.length === 0) {
                // no wifi configs found, scan and show UI
                console.log('_checkAvailableWifiConfigs no configs found, scanning')
                this._updateUIState('ScanningForNetworks');

                this._wifi.networks().then( networks => {
                    this._updateUIState('WifiLocations', networks);
                });

            } else {
                // connect to config[0]
                console.log('_checkAvailableWifiConfigs found config, connecting')
                this._updateUIState('ConnectingToNetwork', configs[0].ssid)

                setTimeout(this._noWiFiConnectionAfterTime.bind(this), WIFI_CONNECTION_TIMEOUT);
                this._wifi.scanAndConnect(configs[0].ssid, configs[0].psk, configs[0].type).then( () => {
                    this.check()
                }).catch( e => {
                    this._updateUIState('WifiConnectError')
                })
            }
        })
    }

    connectWifi(ssid, passwd) {
        this._updateUIState('ConnectingToNetwork', ssid)

        let network = this._wifi.getNetwork(ssid)

        setTimeout(this._noWiFiConnectionAfterTime.bind(this), WIFI_CONNECTION_TIMEOUT);
        this._wifi.connect(network.name, passwd, network.type).then( () => {
            this.check()
        })
    }

    /*
     * Checkers
     */

    check() {
        // stagger checks, to make sure were not checking too much in parallel
        if (this._checkInProgress === true)
            return setTimeout(this.check.bind(this), 5000)

        console.log('check')
        this._checkInProgress = true

        this._checkIPAddress()
            .then( this._checkForTime.bind(this) )
            .then( this._checkForInternet.bind(this) )
            .then( () => {
                console.log('check state:', this._state)

                if (this._state >= this.STATES.HASTIME) {
                    this._updateUIState('Ready');
                    this._wifiWizard = false

                    setTimeout( () => {
                        this._getBootmanagerUrl()
                        .then( data => {
                            if (this._userCancelled === true)
                                return

                            this._launchUx(data.url);
                        }).catch(err => {
                            console.error(err);
                        })
                    }, 7 * 1000);
                } else {
                    this._checkInProgress = false
                }
            })
            .catch((err) => {
                this._checkInProgress = false
                console.error('Error', err)
                this._updateUIState('NoConnection');
            })
    }

    _checkIPAddress() {
        console.log('_checkIPAddress')
        return this._thunderjs.DeviceInfo.addresses()
            .then(data => {
                console.log('_parseNetworks', data)
                let ipList = data.filter(d => {
                    if (d.name === 'lo' || d.ip === undefined || d.ip.length < 1)
                        return false
                    else
                        return true
                }).map(d => {
                    return d.ip[0]
                });

                if (ipList.length > 0) {
                    this._updateUIState('HasLocalNetwork', ipList.toString());
                    this._state = this.STATES.HASIP
                }
            })
    }

    _checkForTime() {
        console.log('_checkForTime')
        return this._thunderjs.call('Controller','status@TimeSync')
            .then((res) => {
                if (res && Array.isArray(res) && res[0] && res[0].state === "activated"){
                    this._state = this.STATES.HASTIME
                    console.log('_checkForTime HASTIME')
                }
            })
    }

    _checkForInternet() {
        // hack to avoid calling to location sync without time, this for somehow crashed my system
        if (this._state < this.STATES.HASTIME)
            return Promise.resolve()

        console.log('_checkForInternet')
        return this._thunderjs.call('LocationSync', 'location')
            .then( (res) => {
                if (res.publicip !== undefined && res.publicip !== '') {
                    this._state = this.STATES.HASINTERNET;
                    console.log('_checkForInternet HASINTERNET')
                }
            })
    }

    _updateUIState(state, data){
        console.log('_updateUIState', state, data)
        this._stage._setState(state, [{data:data}]);
    }

    /*
     * Notifications
     */
    _onMessage(notification) {
        console.log('_onMessage', notification)
        if (!notification) return;

        let _state
        if (notification.data !== undefined)
            _state = notification.data.state

        if (notification.callsign === 'LocationSync')
            this.check()

        if (notification.callsign === 'TimeSync')
            this.check()

        if (notification.callsign === 'NetworkControl')
            this.check();

        if (notification.callsign === 'WifiControl') {
            this._checkPlugins();
            setTimeout(this.check.bind(this), 5000)
        }
    }

    /*
     * Final stage handlers
     */
    _getBootmanagerUrl(info) {
        const url = this._baseBootmanagerUrl;
        console.log('_getBootmanagerUrl')
        return this._getConfig().then( (config) => {
            console.log('_getBootmanagerUrl config & deviceId', config, this._deviceId)
            const _encodedDeviceId = encodeURIComponent(this._deviceId)

            if (config !== undefined && config.url !== undefined) {
                console.log('_getBootmanagerUrl by url', config.url)
                return this._xhr('GET', `${config.url}/${_encodedDeviceId}`)
            } else if (config !== undefined && config.operator !== undefined) {
                console.log('_getBootmanagerUrl by operator', config.operator)
                return this._xhr('GET', `${this._baseBootmanagerUrl}/${config.operator}/${_encodedDeviceId}`)
            } else {
                console.log('_getBootmanagerUrl default', this._landingBaseBootPageDefault)
                return this._xhr('GET', `${this._baseBootmanagerUrl}/${this._landingBaseBootPageDefault}`)
            }
        }).catch(e => {
            console.error('_getBootmanagerUrl error', e)
            console.log('_getBootmanagerUrl fallback to default', this._landingBaseBootPageDefault)
            return this._xhr('GET', `${this._baseBootmanagerUrl}/${this._landingBaseBootPageDefault}`)
        })
    }

    _launchUx(url) {
        //using all for now, individual states on UX through thunderjs didnt seem to work
        this._updateUIState('LaunchingUX');
        console.log('_launchUx', url)

        this._thunderjs.on('Controller', 'all', (data) => {
            if (data.callsign !== 'UX')
                return;

            let _data = data.data ? data.data : {};

            if (_data.state === 'activated')
                this._thunderjs.call('UX', 'state', 'resumed')

            if (_data.suspended === false)
                this._thunderjs.call('UX', 'url',  url)

            if (_data.url === url && _data.loaded)
                setTimeout(this._harakiri.bind(this), 5000)

        });

        if (this._uxPlugin.state === 'deactivated')
            this._thunderjs.call('Controller', 'activate', {'callsign': 'UX'})
        else if (this._uxPlugin.state === 'suspended')
            this._thunderjs.call('UX', 'state', 'resumed')
        else if (this._uxPlugin.state === 'resumed')
            this._thunderjs.call('UX', 'url')
                .then( _url => {
                    if (_url === url)
                        this._harakiri();
                    else
                        this._thunderjs.call('UX', 'url', url)
                });

    }

    _harakiri() {
        console.log('_harakiri')
        this._thunderjs.call('Controller', 'deactivate', {'callsign': 'WebKitBrowser'})
    }

    /*
     * Utility
     */
    _getConfig() {
        return this._xhr('GET', '/config.json');
    }

    _xhr(method, url, body) {
        return new Promise((resolve, reject) => {
            var http = new XMLHttpRequest();
            http.onreadystatechange = (event) => {
                var req = event.target;
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        try {
                            resolve(method === 'GET' ? JSON.parse(req.responseText) : undefined);
                        } catch(err) {
                            reject(err);
                        }
                    } else {
                        reject('XHR failed');
                    }

                }
            };
            http.open(method || 'GET', url, true);
            http.send(body);
        });
    }
}