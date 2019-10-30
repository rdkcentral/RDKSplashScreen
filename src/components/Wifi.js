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