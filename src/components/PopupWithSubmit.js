import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup{
    constructor(popupSelector,handleCardRemove) {               
        super(popupSelector);
        this.handleCardRemove = handleCardRemove;
        this._popupRemove = this._popupSelector.querySelector('.popup-remove__container');
    }

    getCardId(card){
        this.card = card;
        return this.card;
    }

    setEventListeners() {
        super.setEventListeners(); 
        this._popupRemove.addEventListener("submit", (evt) => {evt.preventDefault(); this.handleCardRemove(this.card);});
    }

}