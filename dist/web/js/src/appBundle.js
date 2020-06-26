var appBundle = (function () {
	'use strict';

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

	class RDKLogo extends lng.Component{
		static _template(){
			return {
				w: 1897, h: 372,
				LetterR: { alpha: 0.0001, x: 500, y: 0, w: 436, h: 372, src: App.getPath('images/logo/Letter_R.png') },
				LetterD: { alpha: 0.0001, x: 1000, y: 0, w: 431, h: 372, src: App.getPath('images/logo/Letter_D.png') },
				LetterK: { alpha: 0.0001, x: 1500, y: 0, w: 397, h: 372, src: App.getPath('images/logo/Letter_K.png') },
				BarBlue: { alpha: 0.0001, x: 0, y: 0, w: 449, h: 71, rect: true, color: 0xFF14B0DD },
				BarYellow: { alpha: 0.0001, x: 0, y: 100, w: 449, h: 71, rect: true, color: 0xFFF9B82D },
				BarGreen: { alpha: 0.0001, x: 0, y: 200, w: 449, h: 71, rect: true, color: 0xFF9AC235 },
				BarOrange: { alpha: 0.0001, x: 0, y: 300, w: 449, h: 71, rect: true, color: 0xFFEF7D24 }
			};
		}

		_init(){
			this._logoAnimation = this.animation({
				duration: 1.1, repeat: 0, stopMethod: 'immediate', actions: [
					{ t: 'BarBlue', p: 'x', v: { 0: -140, 1: 0 } },
					{ t: 'BarBlue', p: 'alpha', v: { 0: 0, 0.15: 0, 0.4: 1, 1: 1 } },
					{ t: 'BarYellow', p: 'x', v: { 0: -120, 1: 0 } },
					{ t: 'BarYellow', p: 'alpha', v: { 0: 0, 0.05: 0, 0.3: 1, 1: 1 } },
					{ t: 'BarGreen', p: 'x', v: { 0: -100, 1: 0 } },
					{ t: 'BarGreen', p: 'alpha', v: { 0: 0, 0.005: 0, 0.2: 1, 1: 1 } },
					{ t: 'BarOrange', p: 'x', v: { 0: -80, 1: 0 } },
					{ t: 'BarOrange', p: 'alpha', v: { 0: 0, 0.0005: 0, 0.1: 1, 1: 1 } },
					{ t: 'LetterR', p: 'x', v: { 0: 350, 1: 500 } },
					{ t: 'LetterR', p: 'alpha', v: { 0: 0, 0.05: 0, 0.5: 1, 1: 1 } },
					{ t: 'LetterD', p: 'x', v: { 0: 800, 1: 990 } },
					{ t: 'LetterD', p: 'alpha', v: { 0: 0, 0.15: 0, 0.6: 1, 1: 1 } },
					{ t: 'LetterK', p: 'x', v: { 0: 1250, 1: 1480 } },
					{ t: 'LetterK', p: 'alpha', v: { 0: 0, 0.25: 0, 0.7: 1, 1: 1 } }
				]
			});
		}

		start(){
			this._logoAnimation.start();
		}

		stop(){
			this._logoAnimation.stop();
		}

	}

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

	class Icons extends lng.Component{
		static _template(){
			return {
				Icon01: { mount: 0.5, scale: 0, x: 0, y: 0, w: 167, h: 167, src: App.getPath('images/assets/icon_01.png') },
				Icon02: { mount: 0.5, scale: 0, x: 115, y: -205, w: 167, h: 167, src: App.getPath('images/assets/icon_02.png') },
				Icon03: { mount: 0.5, scale: 0, x: 315, y: -325, w: 167, h: 167, src: App.getPath('images/assets/icon_03.png') },
				Icon04: { mount: 0.5, scale: 0, x: 575, y: -325, w: 167, h: 167, src: App.getPath('images/assets/icon_04.png') },
				Icon05: { mount: 0.5, scale: 0, x: 800, y: -205, w: 167, h: 167, src: App.getPath('images/assets/icon_05.png') },
				Icon06: { mount: 0.5, scale: 0, x: 910, y: 0, w: 170, h: 170, src: App.getPath('images/assets/icon_06.png') }
			};
		}

		_init(){
			this._iconAnimation = this.animation({
				duration: 4.2, delay: 2.78, repeat: 0, stopMethod: 'immediate', actions: [
					{ t: 'Icon01', p: 'scale', v: { 0.2: 0, 0.35: 1 } },
					{ t: 'Icon01', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon02', p: 'scale', v: { 0.215: 0, 0.365: 1 } },
					{ t: 'Icon02', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon03', p: 'scale', v: { 0.23: 0, 0.38: 1 } },
					{ t: 'Icon03', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon04', p: 'scale', v: { 0.255: 0, 0.395: 1 } },
					{ t: 'Icon04', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon05', p: 'scale', v: { 0.27: 0, 0.41: 1 } },
					{ t: 'Icon06', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } },
					{ t: 'Icon06', p: 'scale', v: { 0.285: 0, 0.435: 1 } },
					{ t: 'Icon06', p: 'rotation', v: { 0.2: -0.5, 0.35: 0 } }
				]
			});
		}

		start(){
			this._iconAnimation.start();
		}

		stop(){
			this._iconAnimation.stop();
		}

	}

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

	class Message extends lng.Component{
		static _template(){
			return {
				Message: { color: 0xFF3B646C, text: { text: '', fontSize: 26 } }
			};
		}

		set message(v){
			this._message = v;
			this.tag('Message').text.text = v;
		}

		get message(){
			return this._message;
		}
	}

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

	class WifiItem extends lng.Component{
		static _template(){
			return {
				x: 800, w: 800, h: 80, rect: true, color: 0xFF0E2B3D,
				WifiStrenghtIcon: { w: 50, h: 50, x: 25, y: 15, src: App.getPath('images/icons/icon_wifi.png') },
				WifiProtectedIcon: { w: 25, h: 25, x: 60, y: 45 },
				Label: { x: 100, mountY: 0.4, y: 40, text: { text: 'Unknown', fontSize: 32, maxLines: 1, wordWrapWidth: 650 } }
			};
		}

		set item(v){
			this._item = v;
			this.patch({
				WifiStrenghtIcon: { src: App.getPath(WifiItem.getIconWifiStrength(v.strength)) },
				WifiProtectedIcon: { src: App.getPath(WifiItem.getIconWifiProtected(v.protected)) },
				Label: { text: { text: v.name || 'Unknown' } }
			});
		}

		static getIconWifiStrength(v){
			switch(true){
				case (v >= 0 && v < 20):
					return 'images/icons/icon_wifi_01.png';
				case (v >= 20 && v < 40):
					return 'images/icons/icon_wifi_02.png';
				case (v >= 40 && v < 60):
					return 'images/icons/icon_wifi_03.png';
				case (v >= 60 && v < 80):
					return 'images/icons/icon_wifi_04.png';
				case (v >= 80 && v <= 100):
					return 'images/icons/icon_wifi_05.png';
				default:
					return 'images/icons/icon_wifi.png';
			}
		}

		static getIconWifiProtected(wifiProtected){
			if(wifiProtected){
				return 'images/icons/icon_wifi_protected_true.png';
			}else{
				return 'images/icons/icon_wifi_protected_false.png';
			}
		}

		set introAnimation(delay){
			this.showAnimation = this.animation({
				duration: 1, delay: delay, stopMethod: 'immediate', actions: [
					{ p: 'x', v: { 0: 800, 1: 0 } }
				]
			});
			setTimeout(()=>{
				this.showAnimation.start();
			}, 1000);
		}

		get item(){
			return this._item;
		}

		_focus(){
			this.color = 0xFF377FAC;
		}

		_unfocus(){
			this.color = 0xFF0E2B3D;
		}

		_handleEnter(){
			this.fireAncestors('$onWifiItemSelect', { item: this.item });
		}
	}

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

	class WifiList extends lng.Component{
		static _template(){
			return {
				w: 800, h: 510, clipping: true,
				WifiList: {}
			};
		}

		open(){

		}

		close(){

		}

		_init(){
			this._index = 0;
			this.gridY = 0;
		}

		set index(v){
			this._index = v;
		}

		get index(){
			return this._index;
		}

		moveList(dir){
			if(dir === 'up'){
				this.gridY -= 510;
			}else if(dir === 'down'){
				this.gridY += 510;
			}
			this.tag('WifiList').patch({ smooth:{ y: this.gridY }});
		}

		set items(v){
			if(!(v && Array.isArray(v) && v.length)) return;
			this.tag('WifiList').children = v.map((item, idx)=>{
				return { type: WifiItem, introAnimation: idx*0.2, item, y: idx * 85 };
			});
		}

		_handleUp(){
			if(this.index > 0){
				this.index --;
				if(this.index%6 === 5 && this.index !== 0){
					this.moveList('down');
				}
			}
		}

		_handleDown(){
			const listEnd = this.tag('WifiList').children.length - 1;
			if(this.index < listEnd){
				this.index ++;
				if(this.index%6 === 0 && this.index <= listEnd){
					this.moveList('up');
				}
			}
		}

		_getFocused(){
			return this.tag('WifiList').children[this.index];
		}

	}

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

	var ThunderJS=function(){function l(e){return (l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o);}return t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=null;"undefined"!=typeof WebSocket?t=WebSocket:"undefined"!=typeof MozWebSocket?t=MozWebSocket:void 0!==e?t=e.WebSocket||e.MozWebSocket:"undefined"!=typeof window?t=window.WebSocket||window.MozWebSocket:"undefined"!=typeof self&&(t=self.WebSocket||self.MozWebSocket);function f(t){return new Promise(function(e,n){if(i)e(i);else try{c||((c=new r(function(e){return [e&&e.protocol||"ws://",e&&e.host||"localhost",":"+(e&&e.port||80),e&&e.endpoint||"/jsonrpc"].join("")}(t),"notification")).addEventListener("message",function(e){!function(e){if("string"==typeof e&&(e=JSON.parse(e.normalize().replace(/\\x([0-9A-Fa-f]{2})/g,""))),e.id){var n=a[e.id];n?("result"in e?n.resolve(e.result):n.reject(e.error),delete a[e.id]):console.log("no pending request found with id "+e.id);}}(e.data);}),c.addEventListener("message",function(e){!function(n){if("string"==typeof n&&(n=JSON.parse(n.normalize().replace(/\\x([0-9A-Fa-f]{2})/g,""))),!n.id&&n.method){var e=u[n.method];e&&Array.isArray(e)&&e.length?e.forEach(function(e){e(n.params);}):console.log("no callbacks for "+n.method);}}(e.data);})),c.addEventListener("open",function(){e(i=c);});}catch(e){n(e);}})}function o(s){return {request:function(i,c,u){return new Promise(function(e,n){var t=p+=1,o=function(e,n,t){var o;return (o=t&&t.version)?o:e&&(e[n]||e.default)||1}(s.versions,i,u),r=function(e,n,t,o,r){o&&delete o.version;var i={jsonrpc:"2.0",id:e,method:[n,r,t].join(".")};return !o&&!1!==o||"object"===l(o)&&0===Object.keys(o).length||(i.params=o),i}(t,i,c,u,o);s.debug&&(console.log(" "),console.log("API REQUEST:"),console.log(JSON.stringify(r,null,2)),console.log(" ")),a[t]={body:r,resolve:e,reject:n},function(e,n){f(e).then(function(e){e.send(JSON.stringify(n));}).catch(console.error);}(s,r);})}}}var r=t,a={},u={},i=null,c=null,p=0,s={DeviceInfo:{freeRam:function(e){return this.call("systeminfo",e).then(function(e){return e.freeram})},version:function(e){return this.call("systeminfo",e).then(function(e){return e.version})}}};function d(n,t,e){var o=this,r=function(e,n,t){var o=y(e,n);if(!u[o]){u[o]=[];var r="register";var i=o.split(".").slice(0,-1).join(".");var c={event:n,id:i};this.api.request(e,r,c).then().catch();}return u[o].push(t),u[o].length-1}.call(this,n,t,e);return {dispose:function(){var e=y(n,t);u[e].splice(r,1),0===u[e].length&&function(e,n){var t=y(e,n);delete u[t];var o="unregister",r=t.split(".").slice(0,-1).join("."),i={event:n,id:r};this.api.request(e,o,i);}.call(o,n,t);}}}function y(e,n){return ["client",e,"events",n].join(".")}var h,g=function t(e){return {options:e,plugin:!1,call:function(){var e=Array.prototype.slice.call(arguments);this.plugin&&e[0]!==this.plugin&&e.unshift(this.plugin);var n=e[0],t=e[1];return "function"==typeof this[n][t]?this[n][t](e[2]):this.api.request.apply(this,e)},registerPlugin:function(e,n){this[e]=b(Object.assign(Object.create(t),n,{plugin:e}));},subscribe:function(){},on:function(){var e=Array.prototype.slice.call(arguments);return this.plugin&&e[0]!==this.plugin&&e.unshift(this.plugin),d.apply(this,e)},once:function(){console.log("todo ...");}}},b=function e(n){return new Proxy(n,{get:function(o,r){var i=o[r];return "api"===r?h:void 0!==i?"function"==typeof i?-1<["on","once","subscribe"].indexOf(r)?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.apply(this,n)}:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(t,e){"object"===l(t)&&("object"!==l(t)||t.then&&"function"==typeof t.then)||(t=new Promise(function(e,n){t instanceof Error==!1?e(t):n(t);}));var n="function"==typeof e[e.length-1]?e[e.length-1]:null;if(!n)return t;t.then(function(e){return n(null,e)}).catch(function(e){return n(e)});}(i.apply(this,n),n)}:"object"===l(i)?e(Object.assign(Object.create(g(o.options)),i,{plugin:r})):i:!1===o.plugin?e(Object.assign(Object.create(g(o.options)),{},{plugin:r})):function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.unshift(r),o.call.apply(this,n)}}})};return function(e){return h=o(e),b(function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach(function(e){var n,t,o;n=r,o=i[t=e],t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o;}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e));});}return r}({},g(e),{},s))}}();

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

	class Wifi {

	    constructor(config) {
	        this._thunderjs = new ThunderJS(config);

	        this._networks = undefined;
	    }

	    configs() {
	        return this._thunderjs.call('WifiControl', 'configs')
	    }

	    deleteConfigs() {
	        return this._thunderjs.call('WifiControl', 'configs').then( (configs) => {
	            configs.forEach(config => {
	                this._thunderjs.call('WifiControl', 'delete', { ssid : config.ssid });
	            });
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
	                            this._wifiControlScanListener.dispose();

	                        console.log(`Got ${this._networks.length} networks`);
	                        resolve(this._networks);
	                    });
	            };

	            this._wifiControlScanListener = this._thunderjs.on('WifiControl', 'scanresults', (data) => {
	                _getWifiNetworks();
	            });

	            this._thunderjs.call('WifiControl', 'scan');
	            setTimeout(_getWifiNetworks.bind(this), 2000);

	        });
	    }

	    scanAndConnect(ssid, password, type) {
	        return new Promise( (resolve, reject) => {
	            this.networks()
	            .then( (networks) => {
	                    if (this.getNetwork(ssid) === undefined )
	                        reject('Network does not exist');
	                })
	            .then( this.connect(ssid, password, type) )
	            .then( resolve() );
	        })
	    }

	    connect(ssid, password, type) {
	        console.log(`Connecting to ${ssid} with psk: ${password} and type ${type}`);

	        if (this._wifiConnectionListener)
	            this._wifiControlScanListener.dispose(this._wifiConnectionListener);

	        return this._thunderjs.call('WifiControl', `config@${ssid}`, {
	            ssid : ssid,
	            accesspoint : false,
	            psk : password,
	            type : type
	        }).then( () => {
	            this._wifiConnectionListener = this._thunderjs.on('WifiControl', 'connectionchange', () => {
	                console.log('Succesfully connected to wifi, storing configuration');
	                this._thunderjs.call('WifiControl', 'store');
	                console.log('Getting IP on wlan0');
	                // FIXME - we should be able to handle more then wlan0
	                this._thunderjs.call('NetworkControl', 'request', { device: 'wlan0' });
	            });

	            this._thunderjs.call('WifiControl', 'connect', { ssid: ssid });
	        })
	    }
	}

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

	const CONNECTION_TIMEOUT = 15000;
	const WIFI_CONNECTION_TIMEOUT = 30000;

	class WPE {
	    constructor(host, port, stage) {
	        const config = {
	            host: host,
	            port: port
	        };

	        this._wifi = new Wifi(config);

	        this._stage = stage;
	        this._baseBootmanagerUrl = 'http://bootmanager.metrological.com';
	        this._landingBaseBootPageDefault = 'rdk/landingpage';
	        this.STATES = {
	            NOIP: 1,
	            HASIP: 2,
	            HASTIME: 3,
	            HASINTERNET: 4
	        };

	        this._state = this.STATES.NOIP;
	        this._thunderjs = new ThunderJS(config);
	        this._thunderjs.on('Controller', 'all', this._onMessage.bind(this));

	        this._deviceId = undefined;
	        this._thunderjs.call('DeviceInfo', 'systeminfo').then( systeminfo => {
	            this._deviceId = systeminfo.deviceid;
	        });

	        this._userCancelled = false;
	        this._wifiWizard = false;
	        document.addEventListener('keyup', this._keyHandler.bind(this));
	    }

	    init() {
	        console.log('init');
	        this._checkPlugins();
	        this.check();
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
	                let _p = _plugins[i];

	                if (_p.callsign === 'UX') {
	                    console.log('Found UX plugin');
	                    this._uxPlugin = _p;
	                }

	                if (_p.callsign === 'WifiControl') {
	                    console.log('Found WifiControl plugin');
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
	            console.log('user cancelled');
	            this._userCancelled = true;
	            this._updateUIState('UserCancelled');
	        }
	    }

	    /*
	     * Failure handlers
	     */
	    _noConnectionAfterTime() {
	        console.log('_noConnectionAfterTime');
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
	        console.log('_noWiFiConnectionAfterTime');
	        if (this._state !== this.STATES.HASINTERNET) {
	            this._updateUIState('WifiConnectError');
	            // delete the config and render wifi list
	            this._wifi.deleteConfigs().then( () => {
	                this._wifi.networks().then( networks => {
	                    this._wifiNetworks = networks;
	                    this._updateUIState('WifiLocations', networks);
	                });
	            });
	        }
	    }


	    /*
	     * WIFI
	     */
	    _checkAvailableWifiConfigs() {
	        console.log('_checkAvailableWifiConfigs');

	        this._wifi.configs().then( configs => {
	            console.log('_checkAvailableWifiConfigs configs:', configs);
	            if (configs.length === 0) {
	                // no wifi configs found, scan and show UI
	                console.log('_checkAvailableWifiConfigs no configs found, scanning');
	                this._updateUIState('ScanningForNetworks');

	                this._wifi.networks().then( networks => {
	                    this._updateUIState('WifiLocations', networks);
	                });

	            } else {
	                // connect to config[0]
	                console.log('_checkAvailableWifiConfigs found config, connecting');
	                this._updateUIState('ConnectingToNetwork', configs[0].ssid);

	                setTimeout(this._noWiFiConnectionAfterTime.bind(this), WIFI_CONNECTION_TIMEOUT);
	                this._wifi.scanAndConnect(configs[0].ssid, configs[0].psk, configs[0].type).then( () => {
	                    this.check();
	                }).catch( e => {
	                    this._updateUIState('WifiConnectError');
	                });
	            }
	        });
	    }

	    connectWifi(ssid, passwd) {
	        this._updateUIState('ConnectingToNetwork', ssid);

	        let network = this._wifi.getNetwork(ssid);

	        setTimeout(this._noWiFiConnectionAfterTime.bind(this), WIFI_CONNECTION_TIMEOUT);
	        this._wifi.connect(network.name, passwd, network.type).then( () => {
	            this.check();
	        });
	    }

	    /*
	     * Checkers
	     */

	    check() {
	        // stagger checks, to make sure were not checking too much in parallel
	        if (this._checkInProgress === true)
	            return setTimeout(this.check.bind(this), 5000)

	        console.log('check');
	        this._checkInProgress = true;

	        this._checkIPAddress()
	            .then( this._checkForTime.bind(this) )
	            .then( this._checkForInternet.bind(this) )
	            .then( () => {
	                console.log('check state:', this._state);

	                if (this._state >= this.STATES.HASTIME) {
	                    this._updateUIState('Ready');
	                    this._wifiWizard = false;

	                    setTimeout( () => {
	                        this._getBootmanagerUrl()
	                        .then( data => {
	                            if (this._userCancelled === true)
	                                return

	                            this._launchUx(data.url);
	                        }).catch(err => {
	                            console.error(err);
	                        });
	                    }, 7 * 1000);
	                } else {
	                    this._checkInProgress = false;
	                }
	            })
	            .catch((err) => {
	                this._checkInProgress = false;
	                console.error('Error', err);
	                this._updateUIState('NoConnection');
	            });
	    }

	    _checkIPAddress() {
	        console.log('_checkIPAddress');
	        return this._thunderjs.DeviceInfo.addresses()
	            .then(data => {
	                console.log('_parseNetworks', data);
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
	                    this._state = this.STATES.HASIP;
	                }
	            })
	    }

	    _checkForTime() {
	        console.log('_checkForTime');
	        return this._thunderjs.call('Controller','status@TimeSync')
	            .then((res) => {
	                if (res && Array.isArray(res) && res[0] && res[0].state === "activated"){
	                    this._state = this.STATES.HASTIME;
	                    console.log('_checkForTime HASTIME');
	                }
	            })
	    }

	    _checkForInternet() {
	        // hack to avoid calling to location sync without time, this for somehow crashed my system
	        if (this._state < this.STATES.HASTIME)
	            return Promise.resolve()

	        console.log('_checkForInternet');
	        return this._thunderjs.call('LocationSync', 'location')
	            .then( (res) => {
	                if (res.publicip !== undefined && res.publicip !== '') {
	                    this._state = this.STATES.HASINTERNET;
	                    console.log('_checkForInternet HASINTERNET');
	                }
	            })
	    }

	    _updateUIState(state, data){
	        console.log('_updateUIState', state, data);
	        this._stage._setState(state, [{data:data}]);
	    }

	    /*
	     * Notifications
	     */
	    _onMessage(notification) {
	        console.log('_onMessage', notification);
	        if (!notification) return;

	        let _state;
	        if (notification.data !== undefined)
	            _state = notification.data.state;

	        if (notification.callsign === 'LocationSync')
	            this.check();

	        if (notification.callsign === 'TimeSync')
	            this.check();

	        if (notification.callsign === 'NetworkControl')
	            this.check();

	        if (notification.callsign === 'WifiControl') {
	            this._checkPlugins();
	            setTimeout(this.check.bind(this), 5000);
	        }
	    }

	    /*
	     * Final stage handlers
	     */
	    _getBootmanagerUrl(info) {
	        const url = this._baseBootmanagerUrl;
	        console.log('_getBootmanagerUrl');
	        return this._getConfig().then( (config) => {
	            console.log('_getBootmanagerUrl config & deviceId', config, this._deviceId);
	            const _encodedDeviceId = encodeURIComponent(this._deviceId);

	            if (config !== undefined && config.url !== undefined) {
	                console.log('_getBootmanagerUrl by url', config.url);
	                return this._xhr('GET', `${config.url}/${_encodedDeviceId}`)
	            } else if (config !== undefined && config.operator !== undefined) {
	                console.log('_getBootmanagerUrl by operator', config.operator);
	                return this._xhr('GET', `${this._baseBootmanagerUrl}/${config.operator}/${_encodedDeviceId}`)
	            } else {
	                console.log('_getBootmanagerUrl default', this._landingBaseBootPageDefault);
	                return this._xhr('GET', `${this._baseBootmanagerUrl}/${this._landingBaseBootPageDefault}`)
	            }
	        }).catch(e => {
	            console.error('_getBootmanagerUrl error', e);
	            console.log('_getBootmanagerUrl fallback to default', this._landingBaseBootPageDefault);
	            return this._xhr('GET', `${this._baseBootmanagerUrl}/${this._landingBaseBootPageDefault}`)
	        })
	    }

	    _launchUx(url) {
	        //using all for now, individual states on UX through thunderjs didnt seem to work
	        this._updateUIState('LaunchingUX');
	        console.log('_launchUx', url);

	        this._thunderjs.on('Controller', 'all', (data) => {
	            if (data.callsign !== 'UX')
	                return;

	            let _data = data.data ? data.data : {};

	            if (_data.state === 'activated')
	                this._thunderjs.call('UX', 'state', 'resumed');

	            if (_data.suspended === false)
	                this._thunderjs.call('UX', 'url',  url);

	            if (_data.url === url && _data.loaded)
	                setTimeout(this._harakiri.bind(this), 5000);

	        });

	        if (this._uxPlugin.state === 'deactivated')
	            this._thunderjs.call('Controller', 'activate', {'callsign': 'UX'});
	        else if (this._uxPlugin.state === 'suspended')
	            this._thunderjs.call('UX', 'state', 'resumed');
	        else if (this._uxPlugin.state === 'resumed')
	            this._thunderjs.call('UX', 'url')
	                .then( _url => {
	                    if (_url === url)
	                        this._harakiri();
	                    else
	                        this._thunderjs.call('UX', 'url', url);
	                });

	    }

	    _harakiri() {
	        console.log('_harakiri');
	        this._thunderjs.call('Controller', 'deactivate', {'callsign': 'WebKitBrowser'});
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

	const template = {
		keyWidth: 50,
		keyHeight: 70,
		horizontalSpacing: 25,
		verticalSpacing: 20,
		layouts: {
			'abc': {
				rows: [
					{
						keys: [
							{c: 'a'},
							{c: 'b'},
							{c: 'c'},
							{c: 'd'},
							{c: 'e'},
							{c: 'f'},
							{c: 'g'},
							{c: 'h'},
							{c: 'i'},
							{c: 'j'},
							{c: 'k'},
							{c: 'l'},
							{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
						]
					},
					{
						keys: [
							{c: 'm'},
							{c: 'n'},
							{c: 'o'},
							{c: 'p'},
							{c: 'q'},
							{c: 'r'},
							{c: 's'},
							{c: 't'},
							{c: 'u'},
							{c: 'v'},
							{c: 'w'},
							{c: 'x'},
							{c: 'y'},
							{c: 'z'}
						]
					},
					{
						keys: [
							{c: '.'},
							{c: '_'},
							{c: '-'},
							{c: '@'},
							{c: '0'},
							{c: '1'},
							{c: '2'},
							{c: '3'},
							{c: '4'},
							{c: '5'},
							{c: '6'},
							{c: '7'},
							{c: '8'},
							{c: '9'}
						]
					},
					{
						keys: [
							{c: ','},
							{action: 'space', c: 'space', w: 650},
							{action: 'toggleToLayout', toLayout: '#123', c: '!#', w: 125},
							{action: 'toggleToLayout', toLayout: 'ABC', c: 'ABC', w: 125}
						]
					},
					// {
					// 	keys: [
					// 		{action: '.com', c: '.com', w: 125},
					// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
					// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
					// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
					// 	]
					// }
				]
			},
			'ABC': {
				rows: [
					{
						keys: [
							{c: 'A'},
							{c: 'B'},
							{c: 'C'},
							{c: 'D'},
							{c: 'E'},
							{c: 'F'},
							{c: 'G'},
							{c: 'H'},
							{c: 'I'},
							{c: 'J'},
							{c: 'K'},
							{c: 'L'},
							{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
						]
					},
					{
						keys: [
							{c: 'M'},
							{c: 'N'},
							{c: 'O'},
							{c: 'P'},
							{c: 'Q'},
							{c: 'R'},
							{c: 'S'},
							{c: 'T'},
							{c: 'U'},
							{c: 'V'},
							{c: 'W'},
							{c: 'X'},
							{c: 'Y'},
							{c: 'Z'}
						]
					},
					{
						keys: [
							{c: '.'},
							{c: '_'},
							{c: '-'},
							{c: '@'},
							{c: '0'},
							{c: '1'},
							{c: '2'},
							{c: '3'},
							{c: '4'},
							{c: '5'},
							{c: '6'},
							{c: '7'},
							{c: '8'},
							{c: '9'}
						]
					},
					{
						keys: [
							{c: ','},
							{action: 'space', c: 'space', w: 650},
							{action: 'toggleToLayout', toLayout: '#123', c: '!#', w: 125},
							{action: 'toggleToLayout', toLayout: 'abc', c: 'abc', w: 125}
						]
					},
					// {
					// 	keys: [
					// 		{action: '.com', c: '.com', w: 125},
					// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
					// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
					// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
					// 	]
					// }
				]
			},
			'#123': {
				rows: [
					{
						keys: [
							{c: '!'},
							{c: '@'},
							{c: '#'},
							{c: '$'},
							{c: '%'},
							{c: '^'},
							{c: '&'},
							{c: '*'},
							{c: '('},
							{c: ')'},
							{c: '`'},
							{c: '~'},
							{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
						]
					},
					{
						keys: [
							{c: '¡'},
							{c: '¿'},
							{c: '∞'},
							{c: '['},
							{c: ']'},
							{c: '{'},
							{c: '}'},
							{c: '\\'},
							{c: '|'},
							{c: '-'},
							{c: '_'},
							{c: '='},
							{c: '+'},
							{c: ';'}
						]
					},
					{
						keys: [
							{c: ':'},
							{c: '•'},
							{c: '\"'},
							{c: '\''},
							{c: '<'},
							{c: '>'},
							{c: '.'},
							{c: ','},
							{c: '/'},
							{c: '?'}
						]
					},
					{
						keys: [
							{c: ''},
							{action: 'space', c: 'space', w: 650},
							{action: 'toggleToLayout', toLayout: 'abc', c: 'abc', w: 125},
							{action: 'toggleToLayout', toLayout: 'ABC', c: 'ABC', w: 125}
						]
					},
					// {
					// 	keys: [
					// 		{action: '.com', c: '.com', w: 125},
					// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
					// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
					// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
					// 	]
					// }
				]
			},
		}
	};

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

	class KeyboardButton extends lng.Component{
		static _template(){
			return {
				UnderLine: { x: 0, y: 0, w: 0, h: 3, rect: true, color: 0xFF444444, alpha: 0 },
				Background: { rect: true, color: 0xFF0E2B3D },
				Content: {}
			};
		}

		set action(v){
			this._action = v;
		}

		get action(){
			return this._action;
		}

		get c(){
			return this.key.c;
		}

		set key(v){
			this._key = v;
			if(this.active){
				this._update();
			}
		}

		_update(){
			const key = this._key;
			let content = this._key.source ? { w: 39, h: 26, y: 30, src: this._key.source ? App.getPath(this._key.source) : '' } : { text: { text: key.c || '', fontFace: 'RobotoRegular', textAlign: 'center', fontSize: 36 } };
			this.patch({
				UnderLine: { alpha: (this.action !== 'input') ? 1 : 0, w: this.w, y: (this.h - 3) },
				Background: { w: this.w, h: this.h, rect: true, color: 0xFF0E2B3D },
				Content: { w: this.w, h: this.h, mountX: 0.5, mountY: 0.4, x: this.w / 2, y: this.h / 2, ... content }
			});
		}

		get key(){
			return this._key;
		}

		_focus(){
			this.patch({
				Background: { color: 0xFF377FAC }
			});
		}

		_unfocus(){
			this.patch({
				Background: { color: 0xFF0E2B3D }
			});
		}

		_firstActive(){
			this._update();
		}
	}

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

	class Keyboard extends lng.Component{
		static _template(){
			return {};
		}

		get keyboardTemplate(){
			return template;
		}

		get keyboardButton(){
			return KeyboardButton;
		}

		get maxCharacters(){
			return 40;
		}

		set value(v){
			if(v.length < this.maxCharacters){
				this._value = v;
				this.signal('valueChanged', { value: v });
			}
		}

		get value(){
			return this._value;
		}

		get rows(){
			return this.children;
		}

		get rowLength(){
			return this.rows[this.rowIndex].children.length;
		}

		get currentKey(){
			return this.children[this.rowIndex].children[this.colIndex];
		}

		set layout(layout){
			this._layout = layout;
			this._update();
		}

		get layout(){
			return this._layout;
		}

		_getFocused(){
			return this.currentKey;
		}

		_navigate(dir, value){
			dir = (dir === 'up' || dir === 'down') ? 'vertical' : 'horizontal';
			if(dir === 'horizontal' && this.colIndex + value < this.rowLength && this.colIndex + value > -1){
				this.previous = null;
				return this.colIndex += value;
			}
			else if(dir === 'vertical' && this.rowIndex + value < this.rows.length && this.rowIndex + value > -1){
				const currentColIndex = this.colIndex;
				const targetRow = this.rowIndex + value;
				if(this.previous && this.previous.row === targetRow){
					const tmp = this.previous.col;
					this.previous.col = this.colIndex;
					this.colIndex = tmp;
				}
				else{
					const targetRow = this.children[(this.rowIndex + value)];
					const targetItems = targetRow.children;
					const ck = this.currentKey;
					let target = 0;
					for(let i = 0; i < targetItems.length; i++){
						const ckx = this.children[this.rowIndex].x + ck.x;
						const tix = targetRow.x + targetItems[i].x;
						if((ckx >= tix && ckx <= tix + targetItems[i].w) || (tix >= ckx && tix <= ckx + ck.w)){
							target = i;
							break;
						}
					}
					this.colIndex = target;
				}
				this.previous = { col: currentColIndex, row: this.rowIndex };
				return this.rowIndex += value;
			}
			return false;
		}

		_update(){
			if(this._layout && this.keyboardTemplate.layouts[this._layout] === undefined){
				console.error(`Configured layout "${this.layout}" does not exist. Reverting to "${Object.keys(this.keyboardTemplate.layouts)[0]}"`);
				this._layout = null;
			}
			if(!this._layout){
				this._layout = Object.keys(this.keyboardTemplate.layouts)[0];
			}
			const { keyWidth, keyHeight, horizontalSpacing = 0, verticalSpacing = 0, layouts } = this.keyboardTemplate;

			this.children = layouts[this._layout].rows.map((row, rowIndex)=>{
				let keyOffset = 0;
				const { x = 0, rowVerticalSpacing = verticalSpacing, rowHorizontalSpacing = horizontalSpacing, keys = [] } = row;
				return {
					y: keyHeight * rowIndex + (rowIndex * rowVerticalSpacing), x,
					children: keys.map((key)=>{
						key = Object.assign({ action: 'input' }, key);
						const prevOffset = keyOffset;
						const { w = keyWidth, h = keyHeight, action, toLayout } = key;
						keyOffset += w + rowHorizontalSpacing;
						return { key, action, toLayout, x: prevOffset, w, h, type: this.keyboardButton };
					})
				};
			});
		}

		reset(){
			this.colIndex = 0;
			this.rowIndex = 0;
			this._value = '';
			this.previous = null;
		}

		_init(){
			this.reset();
			this._update();
		}

		_handleRight(){
			return this._navigate('right', 1);
		}

		_handleLeft(){
			return this._navigate('left', -1);
		}

		_handleUp(){
			return this._navigate('up', -1);
		}

		_handleDown(){
			if(this.rowIndex >= 3){
				this.signal('onKeyboardExitDown');
			}else{
				return this._navigate('down', 1);
			}
		}

		_handleEnter(){
			const key = this.currentKey;
			switch(key.action){
				case 'input':
					this.value += key.c;
					break;
				case '.com':
				case '@gmail.com':
				case '@hotmail.com':
				case '@yahoo.com':
					this.value += key.c;
					break;
				case 'backspace':
					this.value = this.value.slice(0, -1);
					break;
				case 'space':
					if(this.value.length > 0){
						this.value += ' ';
					}
					break;
				case 'delete':
					this.value = '';
					break;
				case 'toggleToLayout':
					this.layout = key.toLayout;
					break;
				default:
					this.signal(key.action);
			}
			this.signal('onKeyboardInputUpdate', this.value);
		}
	}

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

	class LoginButton extends lng.Component{
		static _template(){
			return {
				w: 1025, h: 70, rect: true, color: 0xFF0E2B3D,
				Label: { x: 512, y: 35, mountX: 0.5, mountY: 0.4, color: 0xFFF1F1F1, text: { text: 'LOGIN', fontSize: 32 } }
			};
		}

		_focus(){
			this.patch({ color: 0xFF377FAC });
		}

		_unfocus(){
			this.patch({ color: 0xFF0E2B3D });
		}
	}

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

	class WifiLogin extends lng.Component{
		static _template(){
			return {
				w: 0, h: 0, mount: 0.5, alpha: 0.0001, rect: true, color: 0xFF193643, clipping: true,
				InputLabel: { x: 40, y: 30, color: 0xFFF1F1F1, text: { text: 'WIFI Login:', fontSize: 32 } },
				Input: {
					w: 1025, h: 60, x: 40, y: 90, rect: true, color: 0xFF3A6269,
					PasswordText: { x: 20, mountY: 0.4, y: 30, color: 0xFFF1F1F1, text: { text: '', fontSize: 32 } }
				},
				LoginKeyboard: { x: 40, y: 170, type: Keyboard, layout: 'abc', signals: { onKeyboardExitDown: true, onKeyboardInputUpdate: true } },
				LoginButton: { x: 40, y: 540, type: LoginButton }
			};
		}

		_init(){
			this.passwordLabel = '';
			this._setState('LoginKeyboard');
			this.showAnimation = this.animation({
				duration: 0.4, delay: 0, stopMethod: 'immediate', actions: [
					{ p: 'w', v: { 0: 0, 1: 1100 } },
					{ p: 'h', v: { 0: 0, 1: 640 } },
					{ p: 'alpha', v: { 0: 0, 1: 1 } }
				]
			});
			this.hideAnimation = this.animation({
				duration: 0.4, delay: 0, stopMethod: 'immediate', actions: [
					{ p: 'w', v: { 0: 1100, 1: 0 } },
					{ p: 'h', v: { 0: 640, 1: 0 } },
					{ p: 'alpha', v: { 0: 1, 1: 0 } }
				]
			});
		}

		set passwordLabel(v){
			this.tag('PasswordText').text.text = (v && v.length)?(' • ').repeat(v.length):'Please enter your password...';
		}

		showLogin(){
			if(this.wifiName) this.tag('InputLabel').text.text = `WIFI Login:  ${this.wifiName}`;
			this.tag('LoginKeyboard').value = '';
			this.passwordLabel = '';
			this.hideAnimation.stop();
			this.showAnimation.start();
			this.showAnimation.on('finish', ()=>{
				this._setState('LoginKeyboard');
			});
		}

		hideLogin(){
			this.tag('InputLabel').text.text = `WIFI Login:`;
			this.showAnimation.stop();
			this.hideAnimation.start();
		}

		static _states(){
			return [
				class LoginKeyboard extends this{
					$enter(){
						console.log('$enter Keyboard :');
					}

					$exit(){
						console.log('$exit Keyboard :');
					}

					onKeyboardExitDown(){
						this._setState('LoginButton');
					}

					onKeyboardInputUpdate(v){
						this.passwordLabel = v;
					}

					_getFocused(){
						return this.tag('LoginKeyboard');
					}
				},
				class LoginButton$$1 extends this{
					_handleEnter(){
						this.fireAncestors('$onLogin', { name: this.wifiName, password: this.tag('LoginKeyboard').value });
						this.fire('$exit');
					}

					_handleUp(){
						this._setState('LoginKeyboard');
					}

					_getFocused(){
						return this.tag('LoginButton');
					}
				}
			];
		}

	}

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

	class App extends ux.App{
		static _template(){
			return {
				Background: { w: 1920, h: 1080, rect: true, colorTop: 0xFF183644, colorBottom: 0xFF3C646D },
				Wrapper: {
					x: 800, y: -1660, w: 1920, h: 1080, scale: 6.4,
					Clouds: { x: 545, y: 165, w: 1064, h: 556, src: App.getPath('images/assets/clouds.png') },
					Shade: { x: 990, y: 965, w: 876, h: 858, scale: 0.7, mountY: 1, mountX: 0.5, src: App.getPath('images/assets/shade.png') },
					House: { x: 525, y: 445, w: 930, h: 555, src: App.getPath('images/assets/house.png') },
					Icons: { x: 540, y: 510, type: Icons },
					RDKLogo: { x: 820, y: 800, type: RDKLogo, mount: 0.5, scale: 0.18 }
				},
				Message: { x: 80, y: 60, type: Message },
				MessageAdditional: { x: 80, y: 90, type: Message },
				IpAddress: { x: 1600, y: 60, type: Message },
				WifiList: { x: 100, y: 100, type: WifiList, visible: false },
				WifiLoginScreen: { x: 960, y: 540, mount: 0.5, type: WifiLogin },
				Overlay: { w: 1920, h: 1080, rect: true, color: 0xFF000000 }
			};
		}

		_init(){
			//this._wpe = new WPE('192.168.11.101', 80, this);
			this._wpe = new WPE('127.0.0.1', 80, this);
			this._globalAnimation = this.animation({
				duration: 7, repeat: 0, delay: 2, stopMethod: 'immediate', actions: [
					{ t: 'Wrapper', p: 'x', v: { 0.08: 840, 0.3: 0 } },
					{ t: 'Wrapper', p: 'y', v: { 0.08: -1660, 0.3: 0 } },
					{ t: 'Wrapper', p: 'scale', v: { 0.08: 6.4, 0.3: 1 } },
					{ t: 'RDKLogo', p: 'scale', v: { 0.08: 0.12, 0.2: 0.16 } },
					{ t: 'Shade', p: 'scale', v: { 0.16: { v: 0.4, s: 0.3 }, 0.55: { v: 1, se: 1, sme: 1, sm: 1 } } },
					{ t: 'Icons', p: 'y', v: { 0.15: 540, 0.80: { v: 470, se: 0.5, sme: 1, sm: 1 } } },
					{ t: 'Clouds', p: 'x', v: { 0.25: 525, 1: 395 } }
				]
			});
			setTimeout(()=>{
				this.tag('Overlay').visible = false;
				this.startAnimation();
			}, 2000);

			setTimeout(()=>{
				this._wpe.init();
			}, 2500);

			setTimeout(()=>{
				if (this.tag('Message').message === undefined)
					this.tag('Message').message = 'Please wait...';
			}, 7000);
		}

		startAnimation(){
			this.tag('RDKLogo').start();
			this.tag('Icons').start();
			this._globalAnimation.start();
		}

		stopAnimation(){
			this.tag('RDKLogo').stop();
			this.tag('Icons').stop();
			this._globalAnimation.stop();
		}

		set ipAddress(v){
			this._ipAddress = v;
		}

		get ipAddress(){
			return this._ipAddress;
		}

		goToUrl(url){
			window.location.href = url;
		}

		$onLogin({ name = '', password = ''}){
			console.log('$onLogin :', name, password);
			this._wpe.connectWifi(name, password);
		}

		static _states(){
			return [
				class HasLocalNetwork extends this{
					$enter(state, { data }){
						this.tag('Message').message = `Connected!`;
						this.tag('IpAddress').message = `IP: ${data}`;
					}
				},
				class ConnectingToNetwork extends this{
					$enter(state, { data }){
						this.tag('Message').message = `Connecting to: ${data}`;
					}
				},
				class ScanningForNetworks extends this{
					$enter(state){
						this.tag('Message').message = 'Scanning for networks...';
						this.tag('MessageAdditional').message = '';
					}
				},
				class ThunderError extends this{
					$enter(state){
						this.tag('Message').message = 'Error connecting to Thunder';
						this.tag('MessageAdditional').message = '';
					}
				},
				class WifiConnectError extends this{
					$enter(state){
						this.tag('Message').message = 'Error connecting to WiFi';
						this.tag('MessageAdditional').message = '';
					}
				},
				class Ready extends this{
					$enter(state){
						this.tag('Message').message = "We're ready!";
						this.tag('MessageAdditional').message = 'Press OK to cancel UX';
					}
				},
				class LaunchingUX extends this {
					$enter(state) {
						this.tag('MessageAdditional').message = 'Launching UX...';
					}
				},
				class UserCancelled extends this {
					$enter(state) {
						this.tag('MessageAdditional').message = 'Cancelled UX';

						setTimeout(() => {
							this.tag('MessageAdditional').message = '';
						}, 3000);
					}
				},
				class GoToURL extends this{
					$enter(state, { data }){
						if(this._globalAnimation.state === 4){
							this.goToUrl(data.url);
						}else{
							this._globalAnimation.on('finish', ()=>{
								this.goToUrl(data.url);
							});
						}
					}
				},
				class NoConnection extends this{
					$enter(){
						this.tag('Message').message = 'No valid internet connection';
						this.tag('MessageAdditional').message = '';
					}
				},
				class WifiLocations extends this{
					$enter(state, { data }){
						this.tag('WifiList').items = data;
						this.tag('WifiList').visible = true;
						this._setState('WifiLocations.LoadLocations');
						this.tag('MessageAdditional').message = '';
					}

					$exit(){
						this.tag('WifiList').visible = false;
					}

					static _states(){
						return [
							class LoadLocations extends this{
								$enter(){
									this._setState('WifiLocations.Ready');
								}
							},
							class Ready extends this{
								$enter(){

								}

								$onWifiItemSelect({ item }){
									console.log('$onWifiItemSelect :', item);
									this.selectedWifiName = item.name;
									this._setState('WifiLocations.WifiLoginScreen');
								}

								_getFocused(){
									return this.tag('WifiList');
								}
							},
							class WifiLoginScreen extends this{
								$enter(){
									// Show Keyboard
									this.tag('WifiLoginScreen').wifiName = this.selectedWifiName;
									this.tag('WifiLoginScreen').showLogin();
								}

								$exit(){
									// Hide Keyboard
									console.log('$exit :', );
									this.tag('WifiLoginScreen').hideLogin();
								}

								_handleBack(){
									this._setState('WifiLocations.Ready');
								}

								_getFocused(){
									return this.tag('WifiLoginScreen');
								}
							}
						];
					}
				}
			];
		};
	}

	return App;

}());
