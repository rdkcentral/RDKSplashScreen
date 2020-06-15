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

import WifiItem from './WifiItem.js';

export default class WifiList extends lng.Component{
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