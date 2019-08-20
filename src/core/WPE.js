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
        this._checkForIP();

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
                .then(this._updateUIState.bind(this, 'GoToURL'))
                .catch(err => {
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