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