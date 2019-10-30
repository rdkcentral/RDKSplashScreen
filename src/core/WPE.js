import ThunderJS from './ThunderJS.js';
import Wifi from './Wifi.js';

const CONNECTION_TIMEOUT = 15000

export default class WPE {
    constructor(host, port, stage) {
        const config = {
            host: host,
            port: port
        };

        this._wifi = new Wifi(config);

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

    connectWifi(ssid, passwd) {
        this._updateUIState('ConnectingToNetwork', ssid)
        this._wifi.connect(ssid, passwd).then( () => {
            setTimeout(this._noConnectionAfterTime.bind(this), CONNECTION_TIMEOUT);
            this._checkForIP();
        })

    }

    init() {
        console.log('init')
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
        setTimeout(this._noConnectionAfterTime.bind(this), CONNECTION_TIMEOUT);
    }

    _noConnectionAfterTime() {
        console.log('_noConnectionAfterTime')
        if (this._state !== this.STATES.HASINTERNET) {
            if (this._wifiPlugin === undefined) {
                this._updateUIState('NoConnection');
            } else {
                this._updateUIState('ScanningForNetworks');
                this._wifi.networks().then( networks => {
                    this._updateUIState('WifiLocations', networks);
                });
            }
        }
    }

    _checkForIP() {
        console.log('_checkForIP')
        this._thunderjs.call('Controller','status@TimeSync')
            .then((res) => {
                if (res && Array.isArray(res) && res[0] && res[0].state === "activated"){
                    this._state = this.STATES.HASIP;
                    console.log('_checkForIP HASIP')
                    this._initState();
                    this._checkForInternet();
                }
            })
            .catch((e) => {
                console.error('Error', e);
            });
    }

    _checkForInternet() {
        console.log('_checkForInternet')
        this._thunderjs.call('LocationSync', 'location')
            .then( (res) => {
                if (res.publicip !== undefined && res.publicip !== '') {
                    this._state = this.STATES.HASINTERNET;
                    console.log('_checkForInternet HASINTERNET')
                    this._initState();
                }
            })
            .catch((e) => {
                console.error('Error', e);
            });
    }

    _onMessage(notification) {
        if (!notification) return;

        if (notification.callsign === 'LocationSync' && notification.state === 'Activated')
            this._checkForIP();

        if (notification.callsign === 'TimeSync' && notification.state === 'Activated')
            setTimeout(this._checkForInternet.bind(this), 5000);

        if (notification.callsign === 'NetworkControl')
            this._checkForIP();

    }

    _initState() {
        console.log('_initState state:', this._state)
        if (this._state === this.STATES.NOIP) return;

        if (this._state >= this.STATES.HASIP)
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
        console.log('_updateUIState', state, data)
        this._stage._setState(state, [{data:data}]);
    }

    _getBootmanagerUrl(info) {
        const url = this._baseBootmanagerUrl;
        return this._xhr('GET', url);
    }

    _launchUx(url) {
        //using all for now, individual states on UX through thunderjs didnt seem to work
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

    _getIPAddress() {
        console.log('_getIPAddress')
        this._thunderjs.DeviceInfo.addresses()
            .then(this._parseNetworks.bind(this))
            .catch((err) => {
                this._updateUIState('NoConnection');
            })
    }

    _parseNetworks(data) {
        console.log('_parseNetworks', data)
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