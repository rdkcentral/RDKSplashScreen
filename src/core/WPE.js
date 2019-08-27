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

        this._uxPlugin = undefined;
        this._wifiPlugin = undefined;

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

        // give the UI a little time to animate
        setTimeout(this._checkForIP.bind(this), 5000);
        setTimeout(this._noConnectionAfterTime.bind(this), 20000);
    }

    _noConnectionAfterTime() {
        if (this._state !== this.STATES.HASINTERNET) this._updateUIState('NoConnection');
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
            if (data[i].name === 'eth0'){
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