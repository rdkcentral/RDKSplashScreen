import ThunderJS from './ThunderJS.js';



export default class WPE {


    constructor(host, port, stage) {
        const config = {
            host: host,
            port: port
        };

        this._stage = stage;
        this._baseBootmanagerUrl = 'http://bootmanager.metrological.com/rdk/landingpage';
        this.STATES = {
            NOIP: 1,
            HASIP: 2,
            HASINTERNET: 3
        };

        this._state = this.STATES.NOIP;
        this._thunderjs = new ThunderJS(config);
        this._thunderjs.on('Controller', 'statechange', this._onMessage.bind(this));
    }

    init() {
        this._uxPlugin = undefined;
        this._wifiPlugin = undefined;
        this._state = this.STATES.NOIP;

        // check if we have a wifi or ux plugin
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

        this._checkForIP();
        setTimeout(this._noConnectionAfterTime.bind(this), 10000);
    }

    _noConnectionAfterTime() {
        if (this._wifiConnectionListener)
            this._thunderjs.dispose(this._wifiConnectionListener)

        if (this._NetworkControlListener)
            this._thunderjs.dispose(this._NetworkControlListener)

        if (this._wifiControlScanListener)
            this._thunderjs.dispose(this._wifiControlScanListener)

        if (this._state !== this.STATES.HASINTERNET) {
            if (this._wifiPlugin === undefined)
                this._updateUIState('NoConnection');
            else
                this._getWifiNetworks();
        }
    }

    _getWifiNetworks() {
        console.log('No connection, getting Wifi networks');

        let _getWifiNetworks = () => {
            this._thunderjs.call('WifiControl', 'networks')
                .then( data => {
                    if (data === undefined)
                        return;

                    this._networks = data;
                    let networks = data.filter( n => {
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

                        return { name : n.ssid, strength : signal, protected : n.pairs[0].method === 'ESS' ? false : true }
                    })

                    console.log(`Got ${networks.length} networks`);
                    this._updateUIState('WifiLocations', networks);
                });
        }

        this._wifiControlScanListener = this._thunderjs.on('WifiControl', 'scanresults', (data) => {
            _getWifiNetworks();
        });

        this._thunderjs.call('WifiControl', 'scan')
        setTimeout(_getWifiNetworks.bind(this), 2000)
    }

    connectWifi(ssid, password) {
        console.log(`Connecting to ${ssid}`);
        let network = this._networks.filter(n => {
            if (n.ssid === ssid)
                return true
        })[0]

        let type;
        if (network.pairs[0].method === 'WPA2' || network.pairs[0].method === 'WPA')
            type = 'WPA';
        else if (network.pairs[0].method === 'WEP')
            type = 'Unknown';
        else if (network.pairs[0].method === 'ESS')
            type = 'Unsecure';
        else
            type = 'Unkown';

        this._thunderjs.call('WifiControl', `config@${ssid}`, {
            ssid : ssid,
            accesspoint : false,
            psk : password,
            type : type
        }).then( () => {
            setTimeout(this._connect.bind(this), 2000, ssid);
        });
    }

    _connect(ssid) {
        this._wifiConnectionListener = this._thunderjs.on('WifiControl', 'connectionchange', () => {
            console.log(`Succesfully connected to wifi, getting IP`);
            this._thunderjs.call('NetworkControl', 'request', { device: 'wlan0' })
        });

        //sadly the networkcontrol scoped events dont work yet, so go bananas
        this._NetworkControlListener = this._thunderjs.on('Controller', 'all', (e) => {
            if (e.callsign === 'NetworkControl')
                this._checkForIP();
        });

        this._thunderjs.call('WifiControl', 'connect', { ssid: ssid })
        setTimeout(this._noConnectionAfterTime.bind(this), 10000);
    }

    _checkForIP() {
       this._thunderjs.call('Controller','status@TimeSync')
            .then((res) => {
                if (res && Array.isArray(res) && res[0] && res[0].state === "activated"){
                    this._state = this.STATES.HASIP;
                    this._initState();
                    this._checkForInternet();
                }
            })
            .catch((e) => {
                console.error('Error', e);
            });
    }

    _checkForInternet() {
        this._thunderjs.call('LocationSync', 'location')
            .then( (res) => {
                if (res.publicip !== undefined && res.publicip !== '') {
                    this._state = this.STATES.HASINTERNET;
                    this._initState();
                }
            })
            .catch((e) => {
                console.error('Error', e);
            });
    }

    _onMessage(notification) {
        if (!notification) return;

        if (notification.callsign === 'LocationSync' && notification.state === 'Activated') {
            this._state = this.STATES.HASIP;
            this._initState();
        }

        if (notification.callsign === 'TimeSync' && notification.state === 'Activated')
            setTimeout(this._checkForInternet.bind(this), 5000);

    }

    _initState() {
        if (this._state === this.STATES.NOIP) return;

        if (this._state === this.STATES.HASIP)
            this._getIPAddress();

        if (this._state === this.STATES.HASINTERNET) {
                this._getBootmanagerUrl()
                .then( data => {
                    if (this._uxPlugin === undefined)
                        // we dont seem to have a ux plugin, redirect the current window instead
                        this._updateUIState('GoToURL', data);
                    else
                        this._launchUx(data.url);
                }).catch(err => {
                    console.error(err);
                })
        }
    }

    _updateUIState(state, data){
        this._stage._setState(state, [{data:data}]);
    }

    _getBootmanagerUrl(info) {
        const url = this._baseBootmanagerUrl;
        return this._xhr('GET', url);
    }

    _launchUx(url) {
        //using all for now, individual states on UX through thunderjs didnt seem to work
        this._thunderjs.on('Controller', 'all', (data) => {
            if (data.callsign !== 'UX')
                return;

            let _data = data.data ? data.data : {};

            if (_data.state === 'activated')
                this._thunderjs.call('UX', 'state', 'resumed')

            if (_data.suspended === false)
                this._thunderjs.call('UX', 'url',  url)

            if (_data.url === url && _data.loaded)
                this._harakiri();

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
        // give UX some time to load
        setTimeout( () => {
            this._thunderjs.call('Controller', 'deactivate', {'callsign': 'WebKitBrowser'} )
        }, 4000)
    }

    _getIPAddress() {
        this._thunderjs.DeviceInfo.addresses()
            .then(this._parseNetworks.bind(this))
            .catch((err) => {
                this._updateUIState('NoConnection');
            })
    }

    _parseNetworks(data) {
        let ipList = data.filter(d => {
            if (d.name === 'lo' || d.ip === undefined || d.ip.length < 1)
                return false
            else
                return true
        }).map(d => {
            return d.ip[0]
        });

        for (var i in data){
            if (data[i].name === 'eth0' || data[i].name === 'wlan0'){
                this._updateUIState('HasLocalNetwork', ipList.toString());
            }
        }
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