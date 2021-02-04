/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
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

import App from '../App.js';

export default class WifiItem extends lng.Component{
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
