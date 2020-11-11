export class FormValidator {
  constructor(obj, formItem) {
    this.obj = obj;
    this._formItem = formItem;
  }

  enableValidation() {
    this._form = document.querySelector(this._formItem);

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(this._form, this.obj);
  }

  _setEventListeners(formElement) {
    this.inputElements = Array.from(
      formElement.querySelectorAll(this.obj.inputSelector)
    );
    this.buttonElement = formElement.querySelector(
      this.obj.submitButtonSelector
    );

    this.inputElements.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this._checkInputValidity(formElement, evt.target);
        this._toggleButttonState(
          formElement,
          this.buttonElement,
          this.obj.inactiveButtonClass
        );
      });
    });
    this._toggleButttonState(
      formElement,
      this.buttonElement,
      this.obj.inactiveButtonClass
    );
  }

  _toggleButttonState(formElement, buttonElement) {
    if (formElement.checkValidity()) {
      buttonElement.classList.remove(this.obj.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    } else {
      buttonElement.classList.add(this.obj.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    }
  }

  _checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
      this._hideError(formElement, input, this.obj.inputErrorClass);
    } else {
      this._showError(formElement, input, this.obj.inputErrorClass);
    }
  }

  _showError(formElement, input) {
    this.errorElement = formElement.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = input.validationMessage;
    input.classList.add(this.obj.inputErrorClass);
  }

  _hideError(formElement, input) {
    this.errorElement = formElement.querySelector(`#${input.id}-error`);
    this.errorElement.textContent = "";
    input.classList.remove(this.obj.inputErrorClass);
  }
}
