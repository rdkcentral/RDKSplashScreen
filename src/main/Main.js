import Header from "./header/Header.js";
import Menu from "./menuList/MenuList.js";
import Content from "./content/Content.js";
import Loader from "./Loader/Loader.js";

export default class Main extends lng.Component {

    static _template() {
        return {
            Header: {
                type: Header
            },
            Menu: {
                type: Menu
            },
            Content: {
                type: Content
            },
            Loader: {
                x: 960, y: 650,
                type : Loader
            }
        };
    }

    _init(){
        this._setState("Content");
        let cat = Menu.Categories[0].section;
        this._load(cat);
    }

    /**
     * shows loader, hide content, calls _load function
     */
    $getData(cat){
        this.tag('Loader').setSmooth('alpha', 1);
        this.tag('Content').setSmooth('alpha',0);       // to disable content while data loading
        this._load(cat);
    }

    /**
     * This function is used to call api and get data.
     */
    _load(cat) {
        const api = this.fireAncestors('$getApi');
        api.getData(cat).then((data) => {
            this._loaded(data);
        }).catch(err => console.error(err));
    }

    /**
     * This function performs operations which are done after data loaded like stopping loader, display content, setting data to content.
     */
    _loaded(data) {
        this.tag('Content').items = data;
        this.fireAncestors('$stopLoader');
    }

    static _states() {
        return [
            class Content extends this {
                _getFocused() {
                    return this.tag("Content");
                }

                _handleUp(){
                    this._setState("Menu");
                }

                /**
                 * This function is used to change state to menu.
                 */
                $setStateMenu(){
                    this._setState("Menu");
                }

                /**
                 * This function used to change alpha for menu.
                 */
                $setMenuAlpha(value){
                    this.tag('Menu').setSmooth('alpha', value);
                }
            },
            class Menu extends this {
                _getFocused() {
                    return this.tag("Menu");
                }
                _handleDown() {
                    this._setState("Content");
                }
            }
        ];
    }

    /**
     * This function is used to change state to content, stops loader and shows content.
     */
    setStateContent() {
        this._setState("Content");
        this.tag('Loader').setSmooth('alpha', 0);
        this.tag('Content').setSmooth('alpha',1);
    }

}