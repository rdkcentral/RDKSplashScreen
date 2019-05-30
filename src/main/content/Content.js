import ListItem from "./ListItem.js";
import FirstItem from "./FirstItem.js";
import Popup from "../PopUp/Popup.js";

export default class Content extends lng.Component {
    static _template() {
        return {
            Wrapper: {
                zIndex: 0,
                FirstItem: {
                    x: 100, y: 400
                },
                List: {
                    x:1120, y: 400
                }
            },
            PopUp: {
                type: Popup
            }
        }
    }

    _init() {
        this.index = 0;
        this._currentState = 'FirstItem';
        this._setState(this._currentState);
    }

    set items(v) {
        this._items = v;
        this._first =  v[0];
        this._remaining = v.slice(1, v.length);
        this.tag('FirstItem').patch({
            children: [{
                type: FirstItem,
                x: 0,
                y: 0,
                item: this._first, //passing the item as an attribute,
                index: 0
            }]
        });

        this.tag('List').children = this._remaining.map((item, index) => {
            return {
                type: ListItem,
                x: Math.floor((index/2)) * 490,
                y: Math.floor((index%2) )* 290,
                item: item, //passing the item as an attribute,
                index: index
            }
        });

        this._reset();
    }

    /**
     * When data is set into content we are resetting index, state, focus.
     */
    _reset()
    {
        this.index = 0;
        this.tag('Wrapper').setSmooth('x', 0,  {duration: 0.2});
        this._currentState = 'FirstItem';
        this._setState(this._currentState);
    }
    
    /**
     * setting _pastState, _currentState variables.
     */
    state(currentState) {
        this._pastState = this._currentState;
        this._currentState = currentState;
        this._setState(currentState);
    }

    static _states() {
        return [
            class FirstItem extends this {
                _getFocused() {
                    return this.tag('FirstItem').children[0];
                }
                _handleRight() {
                    this.state('List');
                }
                _handleEnter() {
                    this.state('Popup');
                }
            },
            class List extends this {
                _getFocused() {
                    return this.tag('List').children[this.index];
                }

                _handleLeft() {
                    const wrapperTag = this.tag("Wrapper");
                    if(this.index === 0 || this.index === 1) {
                        this.index = 0;
                        this.state('FirstItem');
                        wrapperTag.setSmooth('x', 0, {duration: 0.6});
                    }
                    else if (this.index < 6) {
                        this.index -= 2;
                        const targetX = wrapperTag.getSmooth('x') + 545;
                        wrapperTag.setSmooth('x', targetX, {duration: 0.6});
                    }
                    else {
                        this.index -= 2;
                        const targetX = wrapperTag.getSmooth('x') + 490;
                        wrapperTag.setSmooth('x', targetX,  {duration: 0.6});
                    }
                }

                _handleRight() {
                    if(this.index < this.tag('List').children.length - 2) {
                        this.index += 2;
                        const wrapperTag = this.tag("Wrapper");
                        if(this.index < 6) {
                            const targetX = wrapperTag.getSmooth('x') - 545;
                            wrapperTag.setSmooth('x', targetX,  {duration: 0.6});
                        }
                        else {
                            const targetX = wrapperTag.getSmooth('x') - 490;
                            wrapperTag.setSmooth('x', targetX,  {duration: 0.6});
                        }
                    }
                }

                _handleDown() {
                    if(this.index%2 === 0) {
                        if(this.index === this.tag('List').children.length - 1) {
                            let x = this.tag('Wrapper').getSmooth('x');
                            this.tag("Wrapper").setSmooth('x', x+490, {duration: 0.6});
                            this.index--;
                        }
                        else {
                            this.index++;
                        }
                    }
                }

                _handleUp() {
                    if(this.index%2 === 1) {
                        this.index--;
                    }
                    else {
                        this.fireAncestors('$setStateMenu')
                    }
                }

                _handleEnter() {
                    this.state('Popup');
                }
            },

            class Popup extends this {
                _getFocused() {
                    return this.tag('PopUp');
                }
                $enter() {
                    if(this._pastState === 'FirstItem') {
                        this.tag('PopUp').item = this._first;
                    }
                    else if(this._pastState === 'List') {
                        this.tag('PopUp').item = this._remaining[this.index];
                    }
                    this.fireAncestors('$setMenuAlpha',0.7);
                    this.tag('Wrapper').patch({alpha:0.7});
                    this.tag('PopUp').patch({alpha:1});
                }
                $exit() {
                    this.fireAncestors('$setMenuAlpha',1);
                    this.tag('Wrapper').patch({alpha:1});
                    this.tag('PopUp').patch({alpha:0});
                }
                _handleBack() {
                    this.state(this._pastState);
                }
                _handleUp() {
                    // this is written just not to go focus to menu
                }
                $startVideo() {
                    let idx = this.index;
                    if(this._pastState === 'List') {
                        idx++;
                    }
                    this.fireAncestors('$play', {
                        items: this._items,
                        index: idx
                    }, true);
                }
                /**
                 * changing the state to previous state( mainly used when we go to popup state and come back)
                 */
                $changeState() {
                    this.state(this._pastState);
                }
            }
        ];
    }
}