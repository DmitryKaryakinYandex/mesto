export default class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
        document.removeEventListener("click", this._handleOverlayClose);
    }


    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("click", this._handleOverlayClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {   
            const openedPopup = document.querySelector(".popup_opened");        
            openedPopup.classList.remove("popup_opened");
          }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains("popup_opened")) {  
            const openedPopup = document.querySelector(".popup_opened");
            openedPopup.classList.remove("popup_opened");
          }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener("click", () => this.close());

    }
}