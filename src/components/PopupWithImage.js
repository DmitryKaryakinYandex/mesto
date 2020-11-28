import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }   

    open(element) {
        document.querySelector(".popop-images__item").setAttribute("src", element.link);
        document.querySelector(".popop-images__item").setAttribute("alt", element.name);
        document.querySelector(".popop-images__text").innerText = element.name;
        super.open();
    }

}