import MediaItem from "./MediaItem.js";

export default class CnnApi {
    constructor() {

        /*this._keys = {
            key: 'aabe22c4e1a4038c0fc233bd6a0aa973',
            secret: '5d9d5e20fc83a9ac',
            token: '043c069649b914767c9cfe4db8cc6d63'
        };*/

        this._endpoints = {
            Cdn: 'https://cdn.metrological.com/proxy?url=',
            base: 'https://services.cnn.com/newsgraph/search/topicLabel_exact:',
            US: 'united%20states/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Politics: 'politics/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Europe: 'europe/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Asia: 'asia/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Americas: 'latin%20america/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Entertainment: 'arts%20and%20entertainment/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Tech: 'technology/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Sport: 'Sports%20and%20recreation/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e',
            Travel: 'Travel%20and%20tourism/language:en/rows:30/type:video/start:0/lastPublishDate,desc?api_key=zn2cp943gzffppt589mu525e'
        };
    }

    _getHeaders() {
        return {
            headers: new Headers()
        };
    }

    _send(url) {
        return fetch(url, this._getHeaders()).then(r => r.json());
    }

    getData(category) {
        return this._send(this._endpoints.Cdn + this._endpoints.base + this._endpoints[category]).then(({docs = [], paging}) => {
            if (!docs.length) {
                return Promise.reject('Get data returned no data');
            }
            return Promise.resolve(
                docs.map(doc => new MediaItem(doc))
            );
        });
    }}