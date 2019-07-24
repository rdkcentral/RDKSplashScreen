import App from '../../src/App.js';

export default class Icons extends lng.Component{
	static _template(){
		return {
			Icon01: { mount: 0.5, scale: 0, x: 0, y: 0, w: 170, h: 170, src: App.getPath('images/assets/icon_01.png') },
			Icon02: { mount: 0.5, scale: 0, x: 115, y: -205, w: 170, h: 170, src: App.getPath('images/assets/icon_02.png') },
			Icon03: { mount: 0.5, scale: 0, x: 315, y: -325, w: 170, h: 170, src: App.getPath('images/assets/icon_03.png') },
			Icon04: { mount: 0.5, scale: 0, x: 575, y: -325, w: 170, h: 170, src: App.getPath('images/assets/icon_04.png') },
			Icon05: { mount: 0.5, scale: 0, x: 800, y: -205, w: 170, h: 170, src: App.getPath('images/assets/icon_05.png') },
			Icon06: { mount: 0.5, scale: 0, x: 910, y: 0, w: 170, h: 170, src: App.getPath('images/assets/icon_06.png') }
		};
	}

	_init(){
		this._iconAnimation = this.animation({
			duration: 4.2, delay: 1.8, repeat: 0, stopMethod: 'immediate', actions: [
				{ t: 'Icon01', p: 'scale', v: { 0.2: 0, 0.3: 1 } },
				{ t: 'Icon02', p: 'scale', v: { 0.25: 0, 0.45: 1 } },
				{ t: 'Icon03', p: 'scale', v: { 0.3: 0, 0.5: 1 } },
				{ t: 'Icon04', p: 'scale', v: { 0.35: 0, 0.55: 1 } },
				{ t: 'Icon05', p: 'scale', v: { 0.4: 0, 0.6: 1 } },
				{ t: 'Icon06', p: 'scale', v: { 0.45: 0, 0.65: 1 } }
			]
		});
	}

	start(){
		this._iconAnimation.start();
	}

	stop(){
		this._iconAnimation.stop();
	}

}