import App from '../../src/App.js';

export default class Message extends lng.Component{
	static _template(){
		return {
			Message: { color: 0xFF3B646C, text:{ text: '', fontSize: 26 } }
		};
	}

	set message(v){
		this._message = v;
		this.tag('Message').text.text = v;
	}

	get message(){
		return this._message;
	}

	_init(){

	}

	start(){

	}

	stop(){

	}

}