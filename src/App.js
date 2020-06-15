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

import RDKLogo from './animations/RDKLogo.js';
import Icons from './animations/Icons.js';
import Message from './components/Message.js';
import WifiList from './components/WifiList.js';
import WPE from './core/WPE.js';
import WifiLogin from './components/WifiLogin.js';

export default class App extends ux.App{
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
			IpAddress: { x: 1640, y: 60, type: Message },
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
			this._wpe.init()
		}, 2500)

		setTimeout(()=>{
			if (this.tag('Message').message === undefined)
				this.tag('Message').message = 'Please wait...'
		}, 7000)
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
		this._wpe.connectWifi(name, password)
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
				}
			},
			class ThunderError extends this{
				$enter(state){
					this.tag('Message').message = 'Error connecting to Thunder';
				}
			},
			class WifiConnectError extends this{
				$enter(state){
					this.tag('Message').message = 'Error connecting to WiFi';
				}
			},
			class Ready extends this{
				$enter(state){
					this.tag('Message').message = "We're ready!";
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
				}
			},
			class WifiLocations extends this{
				$enter(state, { data }){
					this.tag('WifiList').items = data;
					this.tag('WifiList').visible = true;
					this._setState('WifiLocations.LoadLocations');
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
