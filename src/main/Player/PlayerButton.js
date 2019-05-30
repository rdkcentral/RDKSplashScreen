import App from "../../App.js";

export default class PlayerButton extends lng.Component {

    static _template() {
        return {
            w: 100, h: 100,
            Background: {rect: true, w: 100, h: 100, color: ""},
            Icon: { y: 30, color: 0xFFFFFFFF}
        };
    }

    set icon(source) {
        this.tag("Icon").src = App.getPath(`images/player/${source}`);
    }

    set setX(source) {
        this.tag("Icon").x = source;
    }

    set active(v) {
        this.alpha = v ? 1 : 0.5;
    }

    get active() {
        return this.alpha === 1;
    }

    static _states() {
        return [
            class Selected extends this {
                $enter() {
                    this.tag("Background").color = 0xFFCB0000;
                }
                $exit() {
                    this.tag("Background").color = "";
                }
            }
        ]
    }

    _focus() {
        this._setState("Selected");
    }

    _unfocus() {
        this._setState("");
    }
}