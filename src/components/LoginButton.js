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

import {Lightning, Utils} from '@lightningjs/sdk';
export default class LoginButton extends Lightning.Component{
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
