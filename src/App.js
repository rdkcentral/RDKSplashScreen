import RDKLogo from './animations/RDKLogo.js';
import Icons from './animations/Icons.js';

export default class App extends ux.App{

	static _template(){
		return {
			Background: { w: 1920, h: 1080, rect: true, colorTop: 0xFF183644, colorBottom: 0xFF3C646D },
			Wrapper: {
				x: 800, y: -1660, w: 1920, h: 1080, scale: 6.4,
				Clouds: { x: 545, y: 165, w: 1064, h: 556, src: App.getPath('images/assets/clouds.png') },
				Shade: { x: 990, y: 965, w: 876, h: 858, scale: 1, mountY: 1, mountX: 0.5, src: App.getPath('images/assets/shade.png') },
				House: { x: 525, y: 445, w: 930, h: 555, src: App.getPath('images/assets/house.png') },
				Icons: { x: 540, y: 510, type: Icons }
			},
			RDKLogo: { x: 240, y: 415, type: RDKLogo, scale: 0.7 }
		};
	}

	static getFonts(){
		return [];
	}

	_init(){
		this.tag('RDKLogo').start();
		this.tag('Icons').start();

		this._globalAnimation = this.animation({
			duration: 7, repeat: 0, stopMethod: 'immediate', actions: [
				//{ v:{ 0.25: ()=>{ this.tag('Icons').start() }}},
				{ t: 'Wrapper', p: 'x', v: { 0.15: 800, 0.3: 0 } },
				{ t: 'Wrapper', p: 'y', v: { 0.15: -1660, 0.3: 0 } },
				{ t: 'Wrapper', p: 'scale', v: { 0.15: 6.4, 0.3: 1 } },
				{ t: 'RDKLogo', p: 'x', v: { 0.15: 240, 0.3: 645 } },
				{ t: 'RDKLogo', p: 'y', v: { 0.15: 415, 0.3: 765 } },
				{ t: 'RDKLogo', p: 'scale', v: { 0.15: 0.7, 0.3: 0.18 } },
				{ t: 'Shade', p: 'scale', v: { 0.25: 0.7, 0.35: 1 } },
				{ t: 'Icons', p: 'y', v: { 0.25: 540, 0.35: 510 } },
				{ t: 'Clouds', p: 'x', v: { 0.25: 645, 1: 545 } }
			]
		});
		this._globalAnimation.start();
	}

	static _states(){
		return [];
	}

}