import App from '../../src/App.js';

export default class RDKLogo extends lng.Component{
	static _template(){
		return {
			w: 1897, h: 372,
			LetterR: { alpha: 0.0001, x: 500, y: 0, w: 436, h: 372, src: App.getPath('images/logo/Letter_R.png') },
			LetterD: { alpha: 0.0001, x: 1000, y: 0, w: 431, h: 372, src: App.getPath('images/logo/Letter_D.png') },
			LetterK: { alpha: 0.0001, x: 1500, y: 0, w: 397, h: 372, src: App.getPath('images/logo/Letter_K.png') },
			BarBlue: { alpha: 0.0001, x: 0, y: 0, w: 449, h: 71, rect: true, color: 0xFF14B0DD },
			BarYellow: { alpha: 0.0001, x: 0, y: 100, w: 449, h: 71, rect: true, color: 0xFFF9B82D },
			BarGreen: { alpha: 0.0001, x: 0, y: 200, w: 449, h: 71, rect: true, color: 0xFF9AC235 },
			BarOrange: { alpha: 0.0001, x: 0, y: 300, w: 449, h: 71, rect: true, color: 0xFFEF7D24 }
		};
	}

	_init(){
		this._logoAnimation = this.animation({
			duration: 1.1, repeat: 0, stopMethod: 'immediate', actions: [
				{ t: 'BarBlue', p: 'x', v: { 0: -140, 1: 0 } },
				{ t: 'BarBlue', p: 'alpha', v: { 0: 0, 0.15: 0, 0.4: 1, 1: 1 } },
				{ t: 'BarYellow', p: 'x', v: { 0: -120, 1: 0 } },
				{ t: 'BarYellow', p: 'alpha', v: { 0: 0, 0.05: 0, 0.3: 1, 1: 1 } },
				{ t: 'BarGreen', p: 'x', v: { 0: -100, 1: 0 } },
				{ t: 'BarGreen', p: 'alpha', v: { 0: 0, 0.005: 0, 0.2: 1, 1: 1 } },
				{ t: 'BarOrange', p: 'x', v: { 0: -80, 1: 0 } },
				{ t: 'BarOrange', p: 'alpha', v: { 0: 0, 0.0005: 0, 0.1: 1, 1: 1 } },
				{ t: 'LetterR', p: 'x', v: { 0: 350, 1: 500 } },
				{ t: 'LetterR', p: 'alpha', v: { 0: 0, 0.05: 0, 0.5: 1, 1: 1 } },
				{ t: 'LetterD', p: 'x', v: { 0: 800, 1: 990 } },
				{ t: 'LetterD', p: 'alpha', v: { 0: 0, 0.15: 0, 0.6: 1, 1: 1 } },
				{ t: 'LetterK', p: 'x', v: { 0: 1250, 1: 1480 } },
				{ t: 'LetterK', p: 'alpha', v: { 0: 0, 0.25: 0, 0.7: 1, 1: 1 } }
			]
		});
	}

	start(){
		this._logoAnimation.start();
	}

	stop(){
		this._logoAnimation.stop();
	}

}