import MenuItem from "./MenuItem.js";

export default class MenuList extends lng.Component {

    static _template() {
        return {
            Wrapper:{            
                x:100, y:289, w:1080, h:60,
                MenuItems:{
                    flex: {direction: 'row'}
                }
            },
        };
    }

    _init() {
        this.tag("MenuItems").children = MenuList.Categories.map((el)=>{
            return {type: MenuItem, title: el.title, section: el.section}
        })
        this._currentActive = 0;
        this._callFocusSelection();
        this._previousSelectedFocus = this._currentActive;
    }

    get list() {
        return this.tag('MenuItems').childList.get();
    }

    get active() {
        return this.list[this._currentActive];
    }

    get previousSelectedActive() {
        return this.list[this._previousSelectedFocus];
    }

    _callFocusSelection() {
        this.active.isSelected = true;
        this._selected = this.active;
        this._selected.deSelect();
    }

    _handleRight() {
        if (this._currentActive < this.list.length - 1) {
            if(this._currentActive === this._previousSelectedFocus) {
                //dont change the focus for menu item which is selected
                this._callFocusSelection();
            }
            this._currentActive ++;
        }
    }

    _handleLeft() {
        if (this._currentActive > 0) {
            if(this._currentActive === this._previousSelectedFocus) {
                this._callFocusSelection();
            }
            this._currentActive --;
        }
    }

    _handleEnter() {
        this.fireAncestors('$getData', this.active.section);
        this._unselected = this.previousSelectedActive;
        this._unselected.deUnSelect();
        this.active.isSelected = true;
        this._selected = this.active;
        if(this._selected) {
            this._selected.deSelect();
            this._previousSelectedFocus = this._currentActive;
        }
    }

    _getFocused() {
        return this.active;
    }
}

MenuList.Categories = [
    {section: "US", title:"U.S."},
    {section: "Politics", title:"Politics"},
    {section: "Europe", title:"Europe"},
    {section: "Asia", title:"Asia"},
    {section: "Americas", title:"Americas"},
    {section: "Entertainment", title:"Entertainment"},
    {section: "Tech", title:"Tech"},
    {section: "Sport", title:"Sport"},
    {section: "Travel", title:"Travel"}
];