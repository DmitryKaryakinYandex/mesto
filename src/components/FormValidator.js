export class FormValidator {
  constructor(params, formSelector) {
    this._params = params;
    this._form = document.querySelector(formSelector);
    this._inputElements = Array.from(this._form.querySelectorAll(this._params.inputSelector));
    this._buttonElement = this._form.querySelector(this._params.submitButtonSelector);
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  _setEventListeners() {
    this._inputElements.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this._checkInputValidity(evt.target);             
        this._toggleButttonState(
        );
      });
    });
    this._toggleButttonState(
    );
  }

  _toggleButttonState() {                     
    if (this._form.checkValidity()) {   
      this.enableButton();                   
    } else {
      this.disableButton();
    }
  }

  enableButton() {
    this._buttonElement.classList.remove(this._params.inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }

  disableButton() {
    this._buttonElement.classList.add(this._params.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }


  _checkInputValidity(input) {                             
    if (input.checkValidity()) {
      this._hideError(input, this._params.inputErrorClass);            
    } else {
      this._showError(input, this._params.inputErrorClass);             
    }
  }

  _showError(input) {                                                      
    this.errorElement = this._form.querySelector(`#${input.id}-error`);      
    this.errorElement.textContent = input.validationMessage;
    input.classList.add(this._params.inputErrorClass);
  }

  _hideError(input) {                                            
    this.errorElement = this._form.querySelector(`#${input.id}-error`);           
    this.errorElement.textContent = "";
    input.classList.remove(this._params.inputErrorClass);
  }

  eraseErrors() {
    this._inputElements.forEach((input) => {
      this._hideError(input);
    });
   }
}