import PlayerButton from "./PlayerButton.js";

export default class Controls extends lng.Component {

    static _template() {
        return {
            Buttons: {
                x: 714, y: 380,
                Previous: {type: this.PlayerButton, icon: "prev.png", setX: 25},
                Rewind: {type: this.PlayerButton, icon: "rewind.png", setX: 25},
                Play: {type: this.PlayerButton, icon: "play.png", setX: 35},
                Forward: {type: this.PlayerButton, icon: "forward.png", setX: 25},
                Next: {type: this.PlayerButton, icon: "next.png", setX: 25},
            },
        };
    }

    static get PlayerButton() {
        return PlayerButton;
    }

    showButtons(previous, next) {
        const o = this.constructor.options;
        let buttons = [];
        if (previous) buttons.push("Previous");
        buttons = buttons.concat(o.buttons);
        if (next) buttons.push("Next");
        this._setActiveButtons(buttons);
        if(previous && next)
        {
            this._setState(this.State);
        }
        else{
            this._setState('Play');
        }
    }

    get _activeButtonIndex() {
        let button = this.tag("Buttons").getByRef(this._getState());
        if (!button.active) {
            button = this.tag("Play");
        }
        return this._activeButtons.indexOf(button);
    }

    get _activeButton() {
        return this._activeButtons[this._activeButtonIndex];
    }

    _setActiveButtons(buttons) {
        const o = this.constructor.options;

        let x = 0;
        this._activeButtons = [];
        this.tag("Buttons").children.map(button => {
            button.active = (buttons.indexOf(button.ref) !== -1);
            button.x = x;
            if (button.active) {
                this._activeButtons.push(button);
            }
            x += button.renderWidth + o.margin;
        });


        this._checkActiveButton();
    }

    _setup() {
        this._setState("Play");
    }

    _init() {
        this.State = 'Play';            // initially to set focus at play button
        this.IsVideoStarted = false;
        this.showButtons(false, false);
        this._setState("Play");
    }

    _checkActiveButton() {
        let index = this._activeButtonIndex;
        if (index === -1) {
            if (index >= this._activeButtons.length) {
                index = this._activeButtons.length - 1;
            }
            else{
                index = 0;
            }
        }
        this._setState(this._activeButtons[index].ref);
    }

    _handleLeft() {
        let index = this._activeButtonIndex;
        if (index > 0) {
            index--;
        }
        this._setState(this._activeButtons[index].ref);
    }

    _handleRight() {
        let index = this._activeButtonIndex;
        if (index < this._activeButtons.length - 1) {
            index++;
        }
        this._setState(this._activeButtons[index].ref);
    }

    _handleEnter() {
        if(this.IsVideoStarted)
        {
            this.State = this._activeButton.ref;            // to set focus of buttons at previous state
            this.signal('press' + this._activeButton.ref);
        }
    }


    set paused(v) {
        this.tag("Play").icon = v ? "play.png" : "pause.png";
    }

    set enableNext(v) {
        this.tag("Next").alpha = v ? 1 : 0;
    }

    static _states() {
        return [
            class Previous extends this {
            },
            class Rewind extends this {
            },
            class Play extends this {
            },
            class Forward extends this {
            },
            class Next extends this {
            }
        ]
    }

    _getFocused() {
        return this.tag(this._getState());
    }

    static get options() {
        if (!this._options) {
            this._options = this._buildOptions();
        }
        return this._options;
    }

    static _buildOptions() {
        return {
            buttons: ['Rewind',"Play",'Forward'],
            margin: 0
        };
    }

}