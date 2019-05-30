import App from "../../App.js";

export default class FirstItem extends lng.Component {
    static _template() {
        return {
            rect: true, w: 990, h: 550, x: 0,
            colorBottom: 0xFF101010,
            colorTop: 0xFF101010,
            colorLeft:  0xFF101010,
            colorRight:  0xFF101010,
            Image: {},
            Title: {
                w: 600, h: 84, x: 30, y: 442, zIndex:10,
                text: {text:{},  color: 0xFF808080, fontFamily: 'Roboto', fontSize: 36, lineHeight: 42}
            },
            Shadow:{x:0, y:350, w:990, h:200, src:App.getPath("images/shadow.png")},
            BlackBorder: {
                alpha: 1, w: 460, h: 260,
                Border: {type: lng.components.BorderComponent, borderWidth: 3, colorBorder: 0xFF101010, w: 990 - 6, h: 550 - 6, x: 3, y: 3}
            },
            Border: {
                alpha: 0, w: 990, h: 550,
                PlayBtn:{
                    rect: true,
                    y: 500, x: 31,
                    w: 45, h: 45,
                    color: 0xff303030,
                    Img:{
                        x: 16, y: 15,
                        w: 13, h: 15,
                        src: App.getPath("images/play_small.png")
                    }
                },
                Time: {
                    rect: true, color: 0xffCB0000,  w: 299, h: 50, x: 76, y: 500, transitions: {y: {duration: 0.6}},
                    Label: {
                        h: 30, w: 259, x: 20, y: 9,
                        text: {
                            text: {}, color: 0xffF1F1F1, fontWeight: 'bold',
                            lineHeight: 30, fontSize: 26, fontFamily: 'Roboto'
                        }
                    }
                },
                Border: {
                    type: lng.components.BorderComponent, borderWidth: 5, colorBorder: 0xff101010,
                    w: 990 - 6, h: 550 - 6, x: 3, y: 3
                }
            }
        }
    }

    set item(v) {
        this._item = v;
        this._title = v.title;
        this._date = v.date;
        this.patch({
            Image: {
                texture: App.cropImage({url: v.getPicture({w: 1100}).url, w: 990, h: 550}),
                alpha: 0.8
            },
            Title: {
                text: {text: this._title},  color: 0xff808080, fontFamily: 'Roboto', fontSize: 36, lineHeight: 42
            },
            Border: {
                Time: {
                    Label: {
                        text: {text: this._date, color: 0xffF1F1F1, fontWeight: 'bold',
                            lineHeight: 30, fontSize: 26, fontFamily: 'Roboto'}
                    }
                },
                Border: {type: lng.components.BorderComponent, borderWidth: 5, colorBorder: 0xff101010, w: 990 - 6, h: 550 - 6, x: 3, y: 3}
            },
        });
    }

    get item() {
        return this._item;
    }

    _focus() {
        let y = this.tag('Title').getSmooth('y');
        this.tag('Image').patch({alpha:1})
        this.patch({
            Border: { alpha: 1,
                Border: {type: lng.components.BorderComponent, borderWidth: 5, colorBorder: 0xffCB0000, w: 990 - 10, h: 550 - 10, x: 5, y: 5}
                }
        })
        this.tag('Title').patch({smooth:{y: [(y-50), { duration: 0.6, } ], color: 0xffF1F1F1}});
    }

    _unfocus() {
        let y = this.tag('Title').getSmooth('y');
        this.tag('Image').patch({alpha:0.8})
        this.patch({
            Border: { alpha: 0,
                Border: {type: lng.components.BorderComponent, borderWidth: 5, colorBorder: 0xff101010, w: 990 - 6, h: 550 - 6, x: 3, y: 3}
                }
        })
        this.tag('Title').patch({smooth:{y: [(y+50), { duration: 0.6 } ], color: 0xff808080}});
    }
}




