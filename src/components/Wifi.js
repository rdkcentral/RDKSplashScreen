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

export default class WiFi extends lng.Component{
	static _template(){
		return {
			Background: { w: 1920, h: 1080, rect: true, colorTop: 0xFF183644, colorBottom: 0xFF3C646D },
			RDKLogo: { x: 20, y: 20, type: RDKLogo, mount: 0.5, scale: 0.10 },
            Overlay: {alpha: 0, rect: true, color: 0xf2001019, w: 1920, h: 1080,
                Title:{y: 140, type: WifiTitle},
                Password:{y: 420, alpha: 0, type: WifiPasswordField},
                Keyboard:{y: 540, alpha: 0, type: Keyboard, signals:{keypress:true, query:'connect'}},
            },
            AccessPoints: {
                type: lng.views.ListView,
                horizontal: false,
                h: 850,
                itemSize: 95,
                scrollTransition: { duration: 0.3 },
                invertDirection: true,
                roll: true,
                viewportScrollOffset: 0,
                itemScrollOffset: 0,
                rollMin: 0,
                rollMax: 85
            }
		};
	}


	static _states(){
		return [
			
			/*
			class WiFi extends this {
				$enter() {

				}
			}
			*/
		];
	};

}
