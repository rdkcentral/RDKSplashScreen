import CnnApi from "../lib/api/CnnApi.js";
import Main from "./main/Main.js";
import Player from "./main/Player/PlayVideo.js";

export default class App extends ux.App {

    static getFonts() {
        return [
            {family: 'Roboto', url: App.getPath('fonts/Roboto-Regular.ttf'), descriptors: {}},
            {family: 'Roboto', url: App.getPath('fonts/Roboto-Bold.ttf'), descriptors: {weight: 'bold'}}
        ]
    }

    static _template() {
        return {
            Error: {
                rect: true, y: -60, w: 1920, h: 60, color: 0xff272722, alpha: 1, zIndex: 100,
                Title:{
                    x: 800, y: 5, text: {text: "This video cannot be played"}
                },
            },
            Player: {type: Player, alpha: 0, signals: {playerStop: true}},
            Loader: {
                x: 875, y: 455, w: 170, h: 170,
                src: App.getPath("images/cnn_logo.png")
            },
            Main: {
                w: 1920, h: 1080, color: 0xff272722,
                rect: true,
                type: Main, alpha: 0
            }
        };
    }

    _construct() {
        this._api = new CnnApi();
    }

    $getApi() {
        return this._api;
    }

    _setup() {
        this._loader = this.tag('Loader').animation({
            duration: 6,
            repeat: -1,
            stopMethod: 'immediate',
            actions:[
                { p: 'y',
                    v: {
                        0: { v: 490, sm: 0 },
                        0.25: { v: 460, sm: 0 },
                        0.5: { v: 490, sm: 0 },
                        0.75: { v: 520, sm: 0 },
                        1: { v: 490, sm: 0 }
                    }
                }
            ]
        });
        this._loader.on('stop', () => {
            this.tag('Loader').setSmooth('alpha', 0);
        });
    }

    _init(){
        this._setState("Loading");
    }

    /**
     * This function is used to set state to main.
     */
     $stopLoader() {
         this._setState('Main');
         this.tag('Main').setStateContent();
     }

    /**
     * This function is used to hide the error message after 2 seconds.
     */
    _setInterfaceTimeout() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => {
            this.tag('Error').setSmooth('y', -60, {duration: 0.5});

        }, 2000);
    }

    static _states() {
        return [
            class Loading extends this {
                $enter() {
                    this._loader.start();
                }
                $exit() {
                    this._loader.stop();
                }
            },
            class Main extends this {
                _getFocused() {
                    return this.tag("Main");
                }
                $enter() {
                    this.tag("Main").setSmooth('alpha', 1);
                }
                $exit() {
                    this.tag("Main").setSmooth('alpha', 0);
                }
                /**
                 * This function is used to set state to player and to play the video.
                 */
                $play({index, items}) {
                    const player = this.tag('Player');
                    items = items.map(item => item.getMediaplayerItem());
                    const playlist = {item: items[index], items: items};
                    if (player.play(playlist)) {
                        this._setState("Playing");
                    }
                }
            },
            class Playing extends this {
                $enter() {
                    this.tag("Player").setSmooth('alpha', 1);
                }
                $exit() {
                    this.tag("Player").setSmooth('alpha', 0);
                }
                _handleBack() {
                    this.playerStop();
                }
                playerStop() {
                    // Last item has been fully played.
                    this._setState("Main");
                }
                _getFocused() {
                    return this.tag("Player");
                }
                /**
                 * when any error occured while playing a video this function set state to main and shows error message.
                 */
                $setStateMain() {
                    this.tag('Error').setSmooth('y', 0, {duration: 0.5});
                    this._setInterfaceTimeout();
                    this._setState('Main');
                }
            }
        ]
    }

    static cropImage({url, w, h}) {
        return ux.Ui.getImage(url, {width: w, height: h, type: 'crop'});
    }
}