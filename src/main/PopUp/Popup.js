import App from "../../App.js";

export default class FirstItem extends lng.Component {
    static _template() {
        return {
            rect: true, w: 980, h: 1080,
            alpha: 0, x: 300, color: 0xFF303030, zIndex: 99,
            Image: {},
            PlayBtn:{
                y: 225, x: 419,
                w: 100, h: 100,
                src: App.getPath("images/playicon_details.png")
            },
            Time: {
                rect: true, color: 0xFF202020,  w: 299, h: 50, x: 74, y: 550, transitions: {y: {duration: 0.3}},
                Label: {
                    w: 259, h: 30, x: 20, y: 9, color: 0xFFF1F1F1,
                    text: {fontFamily: 'Roboto', fontSize: 26, fontWeight: 'bold', lineHeight: 30}
                }
            },
            Title: {
                w: 840, h: 120, x: 70, y: 634, color: 0xFFF1F1F1,
                text: {fontFamily: 'Roboto', fontSize: 42, fontWeight: 'bold', lineHeight: 60}
            },
            Description: {
                 w: 840, h: 280, x: 70, y: 771,
                clipping: true,
                Content: {
                    w: 840, color: 0xFF909090,
                    text: { fontFamily: 'Roboto', fontSize: 26, lineHeight: 48}
                }
            },
            TopShadow:{ rect: true, x: 60, y: 325, w: 860, h: 120, colorTop: 0XFF303033, colorBottom: 0X00FFFFFF, alpha : 0},
            BottomShadow:{ rect: true, x: 60, y: 960, w: 860, h: 120, colorTop: 0X00FFFFFF, colorBottom: 0XFF303033, alpha : 0}
        }
    }

    _init(){
        this._upDownKeyCount = 0;
        this.contentHeight = 0;
        this.YofContent = 0;
        this.tag('Title').on('txLoaded', () => {
            this._showTopShadow();
            this._showBottomShadow();
        });
    }

    set item(v) {
        this._info = v;
        this._popupDate = v.date;
        this._popupTitle = v.title;
        this._popupDescription = v.description;
        this._data();
    }

    _data() {
        this._image = App.cropImage({url: this._info.getPicture({w: 1100}).url, w: 980, h: 550});
        this.patch({
            Image: {
                w: 980, h: 550,
                texture: this._image
            },
            Time: {
                Label: {
                   text: {text: this._popupDate}
                }
            },
            Title: {
                text: {text: this._popupTitle}
            },
            Description: {
                Content:{
                    text: {text: this._popupDescription}
                }
            }
        });
    }

    _reset(){
        this._upDownKeyCount = 0;
        this.contentHeight = 0;
        this.YofContent = 0;
        this.tag('Image').setSmooth('y', 0);
        this.tag('PlayBtn').setSmooth('y', 225);
        this.tag('Time').setSmooth('y', 550);
        this.patch({
            Title: {
                smooth: {y: 634, alpha: 1}
            },
            Description: {
                smooth: {
                    h: 280, y: 771
                }
            },
            Content: {
                smooth: {
                    y: 0
                }
            }
        });
    }

    _handleBack() {
        this._reset();
        this.fireAncestors('$changeState');
    }

    _handleEnter() {
        this.fireAncestors('$startVideo');
    }

    _handleDown() {
        let condition = this._excessData();
        if (condition) {
            if (this._upDownKeyCount === 0) {
                this.tag('Image').setSmooth('y', -310, {duration: 0.9});
                this.tag('PlayBtn').setSmooth('y', 65, {duration: 0.9});
                this.tag('Time').setSmooth('y', 240, {duration: 0.9});
                this.tag('Title').setSmooth('y', 324, {duration: 0.9});
                this.tag('Description').patch({
                    smooth: {
                        h: 610,
                        y: [461, {duration: 0.9}]
                    }
                });
            } else if (this._upDownKeyCount === 1) {
                this.tag('Title').setSmooth('alpha', 0);
                this.tag('Description').patch({
                    smooth: {
                        h: 750,
                        y: [330, {duration: 0.9}]
                    }
                });
            } else {
                let nextContentHeight = this.contentHeight - ((this._upDownKeyCount - 1)*625);
                let yPos = 625;
                if (nextContentHeight < 625) {
                    yPos = nextContentHeight;
                }

                this.tag('Content').patch({
                    smooth: {
                        y: [this.YofContent - yPos, {duration: 0.9}]
                    }
                });
                this.lastYPpositionMoved = nextContentHeight;
            }
            this._upDownKeyCount++;
        }
        this._excessData();
        this._showTopShadow();
        this._showBottomShadow();
    }

    _handleUp() {
        if (this._upDownKeyCount > 0) {
            this.YofContent = this.tag('Content').getSmooth('y');
            if (this._upDownKeyCount === 1) {
                this.tag('Image').setSmooth('y' , 0, {duration: 0.9});
                this.tag('PlayBtn').setSmooth('y' , 225, {duration: 0.9});
                this.tag('Time').setSmooth('y' , 550, {duration: 0.9});
                this.tag('Title').setSmooth('y' , 634, {duration: 0.9});
                this.tag('Description').patch({
                    smooth:{
                        h: [280, { duration: 0.9}],
                        y: [771, { duration: 0.9}]
                    }});
            }
            else if (this._upDownKeyCount === 2) {
                this.tag('Title').setSmooth('alpha' , 1, );
                this.tag('Description').patch({
                    smooth:{
                        h: 610,
                        y: [461, { duration: 0.9}]
                    }});
            }
            else {
                let yPos = 625;
                if (this.lastYPpositionMoved > 0 && this.lastYPpositionMoved < yPos) {
                    yPos = this.lastYPpositionMoved;
                    this.lastYPpositionMoved = 0;
                }

                this.tag('Content').patch({
                    smooth:{
                        y: [this.YofContent + yPos, { duration: 0.9}]
                    }
                });
            }
            this._upDownKeyCount--;
        }
        this._showBottomShadow();
        this._showTopShadow();
    }

    _excessData() {
        this.Des = this.tag('Description').finalH;
        this.contentHeight = this.tag('Content').finalH;
        this.YofContent = this.tag('Content').getSmooth('y');
        return this._upDownKeyCount === 0 ? !(this.contentHeight+this.YofContent < 280) : !(this.contentHeight+this.YofContent < this.Des);
    }

    _showTopShadow() {
        // if we press 3 times down then only the content will hidden in the top.
        this.tag('TopShadow').setSmooth('alpha', (this._upDownKeyCount >= 3 ? 1 : 0));
    }

    _showBottomShadow() {
        this.tag('BottomShadow').setSmooth('alpha', (this._excessData() ? 1 : 0 ));
    }
}