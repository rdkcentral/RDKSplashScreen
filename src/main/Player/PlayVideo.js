import Progress from "./Progress.js";
import Controls from "./Controls.js";
import Loader from "../Loader/Loader.js";
import App from "../../App.js";

export default class Play extends lng.Component {

    static _template() {
        return {
            w:1920, h: 1080,
            Loader: {
                x: 960, y: 500,
                type : Loader
            },
            Footer:{
                w: 1920, h: 500, y: 580,
                Title:{
                    w: 1520, h: 60, x: 200, y: 225, text: {color: 0xffF1F1F1, fontFamily: 'Roboto', textAlign: 'center', fontSize: 42, lineHeight: 60},
                },
                Progress:{
                    type: Progress,
                },
                Controls:{
                    type: Controls,
                    signals: {
                        pressPlay: true, pressPrevious: true, pressNext: "_pressNext",
                        pressForward : "_scrubForward", pressRewind: "_scrubBackward"}
                }
            },
            Shadow:{
                w: 1920, h: 500, y: 580, zIndex: -1,
                src: App.getPath("images/shadow.png")
            }
        }
    }

    _setItem(item) {
        this.tag("Progress").setProgress(0, 0);
        this._item = item;
        this._title = item.title;
        this.tag('Title').patch({text:{text: this._title}});
        this._stream = item.stream;

        this._index = this._items.indexOf(item);
        this.tag("Controls").showButtons(this._index > 0, this._index < this._items.length - 1);
        this.tag("Controls").State = "Play";  // to set focus at play button
        this.tag('Loader').setSmooth('alpha', 1);
    }

    _setInterfaceTimeout() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => {
            this._hide();
        }, 8000);
    }

    _init() {
        this._setState("Controls");
    }

    _focus() {
        this._setInterfaceTimeout();
    }

    _unfocus() {
        clearTimeout(this._timeout);
    }

    $mediaplayerEnded() {
        this._pressNext();
    }

    play({item, items = [item]}) {
        this._items = items;
        this.x = items.indexOf(item);
        this._setItem(item);
        return !!this._stream;
    }

    pressPrevious() {
        this.tag('Controls').IsVideoStarted = false;
        this.tag('Loader').setSmooth('alpha', 1);
        this.tag("Controls").paused = true;
        const index = this._index - 1;
        if (index >= 0) {
            this._setItem(this._items[index]);
        }
    }

    _pressNext() {
        this.tag('Controls').IsVideoStarted = false;
        this.tag('Loader').setSmooth('alpha', 1);
        this.tag("Controls").paused = true;
        const index = (this._index + 1);
        this._setItem(this._items[(index < this._items.length ? index: 0)]);
    }

    pressPlay() {
        this.application.mediaplayer.playPause();
    }

    _scrubBackward() {
        this.application.mediaplayer.seek(-15);
    }

    _scrubForward() {
        this.application.mediaplayer.seek(15);
    }

    $mediaplayerPause() {
        this.tag("Controls").paused = true;
    }

    $mediaplayerPlay() {
        this.tag('Controls').IsVideoStarted = true;
        this.tag('Loader').setSmooth('alpha', 0);
        this.tag("Controls").paused = false;
    }

    $mediaplayerStop() {
        this.signal('playerStop');
    }

    $mediaplayerError() {
        this.fireAncestors('$setStateMain');
    }

    $mediaplayerProgress({currentTime, duration}) {
        this.tag("Progress").setProgress(currentTime, duration);
    }

    _captureKey() {
        this._setInterfaceTimeout();
        return false;
    }

    _hide() {
        this._setState("Hidden");
    }

    static _states() {
        return [
            class Hidden extends this {
                $enter({prevState}) {
                    this._prevState = prevState;
                    this.tag('Footer').setSmooth('alpha', 0);
                }
                $exit() {
                    this._setInterfaceTimeout();
                    this.tag('Footer').setSmooth('alpha', 1);
                }
                _captureKey() {
                    this._setState(this._prevState);
                }
            },
            class Controls extends this {
            }
        ];
    }

    _getFocused() {
        return this.tag("Controls");
    }

    _setFocusSettings(settings) {
        settings.mediaplayer.consumer = this;
    }

    getMediaplayerSettings() {
        if (this._stream) {
            // Backwards compatibility.
            this._stream.src = this._stream.link;
        }

        return {
            stream: this._stream
        };
    }
}