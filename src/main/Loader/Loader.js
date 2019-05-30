import App from "../../App.js";

export default class Main extends lng.Component {

    static _template() {
        return {
            Loader: {
                w: 100, h: 100, mount: 0.5, alpha: 1,
                src: App.getPath("images/loader.png")
            }
        };
    }

    _setup() {
        this._loader = this.tag('Loader').animation({
            duration: 3,
            repeat: -1,
            stopMethod: 'imeadiate',
            actions: [{p: 'rotation', v: {0: {v: 0, sm: 0}, 1: {v: 2 * Math.PI, sm: 0}}}]
        })
    }

    _active() {
        this._loader.start();
    }
}
