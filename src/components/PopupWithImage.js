import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageItem = this._popupSelector.querySelector('.popop-images__item');
    }   

    open(element) {
        this._popupImageItem.setAttribute("src", element.link);
        this._popupImageItem.setAttribute("alt", element.name);
        document.querySelector(".popop-images__text").innerText = element.name;
        super.open();
    }

}