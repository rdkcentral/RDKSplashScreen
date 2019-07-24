import App from '../../src/App.js';

export default class Clouds extends lng.Component{
	static _template(){
		return {
			Cloud01: { mount: 0.5, scale: 0.6, x: 2100, y: 100, w: 186, h: 72, src: App.getPath('images/assets/cloud.png'), transitions: { x: { duration: 39, repeat: -1, delay: 0, timingFunction: 'linear' } } },
			Cloud02: { mount: 0.5, scale: 0.8, x: 2100, y: 200, w: 186, h: 72, src: App.getPath('images/assets/cloud.png'), transitions: { x: { duration: 42, repeat: -1, delay: 0, timingFunction: 'linear' } } },
			Cloud03: { mount: 0.5, scale: 0.8, x: 2100, y: 300, w: 186, h: 72, src: App.getPath('images/assets/cloud.png'), transitions: { x: { duration: 32, repeat: -1, delay: 0, timingFunction: 'linear' } } },
			Cloud04: { mount: 0.5, scale: 1, x: 2150, y: 400, w: 186, h: 72, src: App.getPath('images/assets/cloud.png'), transitions: { x: { duration: 20, repeat: -1, delay: 0, timingFunction: 'linear' } } },
			Cloud05: { mount: 0.5, scale: 1, x: 2200, y: 500, w: 186, h: 72, src: App.getPath('images/assets/cloud.png'), transitions: { x: { duration: 28, repeat: -1, delay: 0, timingFunction: 'linear' } } }
		};
	}

	_init(){
		this._cloudsAnimating = false;
	}

	start(){
		let self = this;
		if(this._cloudsAnimating) return;
		this._cloudsAnimating = true;
		this.tag('Cloud01').setSmooth('x', -200 );
		this.tag('Cloud01').transition('x').on('finish', () => {
			if(!self._cloudsAnimating) return;
			self.tag('Cloud01').x = 2100;
			self.tag('Cloud01').setSmooth('x', -200 );
		});
		this.tag('Cloud02').setSmooth('x', -200 );
		this.tag('Cloud02').transition('x').on('finish', () => {
			if(!self._cloudsAnimating) return;
			self.tag('Cloud02').x = 2100;
			self.tag('Cloud02').setSmooth('x', -200 );
		});
		this.tag('Cloud03').setSmooth('x', -200 );
		this.tag('Cloud03').transition('x').on('finish', () =>{
			if(!self._cloudsAnimating) return;
			self.tag('Cloud03').x = 2100;
			self.tag('Cloud03').setSmooth('x', -200 );
		});
		this.tag('Cloud04').setSmooth('x', -200 );
		this.tag('Cloud04').transition('x').on('finish', () => {
			if(!self._cloudsAnimating) return;
			self.tag('Cloud04').x = 2150;
			self.tag('Cloud04').setSmooth('x', -200 );
		});
		this.tag('Cloud05').setSmooth('x', -200 );
		this.tag('Cloud05').transition('x').on('finish', () => {
			if(!self._cloudsAnimating) return;
			self.tag('Cloud05').x = 2200;
			self.tag('Cloud05').setSmooth('x', -200 );
		});
	}

	stop(){
		this._cloudsAnimating = false;
	}

}