import App from "../../App.js";
export default class header extends lng.Component {

    static _template() {
        return {
            rect: true, w: 1920, h: 190, color: 0xff101010,
            Logo:{
                y: 70, x: 100, w: 170, h: 169,
                src: App.getPath("images/cnn_logo.png")
            }
        };
    }
}