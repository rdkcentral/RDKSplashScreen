export default class MenuItem extends lng.Component {

    static _template() {
        return {
            flex:true,
            rect: true, color:0x96101010,h:62,
            flexItem:{marginRight:10},
            Label:{
                color:0xff808080, x:10,y:9,text:{text:"test", fontSize:36,paddingLeft:10,paddingRight:30,fontFamily:"Roboto",lineHeight: 42}
            }
        };
    }

    set title(v) {
        this.tag("Label").text.text = v;
    }

    set section(v){
        this._section = v;
    }

    get section(){
        return this._section;
    }

    _focus() {
        this.patch({
            color:0xffCB0000,
            Label:{
                color:0xffF1F1F1
            }
        });
    }

    _init() {
        this._isSelected = false;
    }

    deSelect() {
        this._isSelected = true;
        this.patch({
            smooth: {h:80,y:[-18, {duration: 0.3}]},
            color: 0xff101010,
            Label:{
                color: 0xffF1F1F1, y: 5, x: 16,
                text:{fontSize: 52, lineHeight: 61, paddingRight: 45}
            }
        });
    }

    deUnSelect() {
        this.patch({
            smooth: {h:62,y:[0, {duration: 0.3}]},
            color: 0x96101010,
            Label: {
                color: 0xff808080, x: 10, y: 9,
                text:{fontSize: 36, lineHeight: 42, paddingRight: 30}
            }
        });
    }

    _unfocus() {
        if(this._isSelected === false) {
            this.patch({
                color: 0x96101010,
                Label: {
                    color: 0xff808080
                }
            });
        }
        else {
            this._isSelected = false;
        }
    }

}