import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector,handleFormSubmit) {               
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._popupFrom = this._popupSelector.querySelector('.popup__form');
    } 

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup-input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupFrom.addEventListener("submit", (evt) => {evt.preventDefault(); this.handleFormSubmit(this._getInputValues());});
    }

    close() {
        this._popupFrom.reset();
        super.close();      
    }

}

