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

// import App from '../App.js';
import Keyboard from './keyboard/Keyboard.js';
import LoginButton from './LoginButton.js';
import {Lightning, Utils} from '@lightningjs/sdk';

export default class WifiLogin extends Lightning.Component{
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
			class LoginButton extends this{
				_handleEnter(){
					this.fireAncestors('$onLogin', { name: this.wifiName, password: this.tag('LoginKeyboard').value });
					this.fire('$exit')
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
