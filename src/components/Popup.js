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
        document.addEventListener("keydown", this._handleEscClose.bind(this));
        document.addEventListener("click", this._handleOverlayClose.bind(this));
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {  
           this.close();
          }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains("popup_opened")) {  
            this.close();
          }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener("click", () => this.close());
    }
}