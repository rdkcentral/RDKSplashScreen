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

import App from '../../App.js';

export default class KeyboardButton extends lng.Component{
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
