const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup-input__button_disabled",
  inputErrorClass: "popup-input_type_error",
};
  
function hideError(formElement, input, { inputErrorClass, ...rest }) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(inputErrorClass);
};
  
function showError(formElement, input, { inputErrorClass, ...rest }) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};
  
function setEventListeners(formElement,{ inputSelector, submitButtonSelector, ...rest }) {
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputElements.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(formElement, evt.target);
      toggleButttonState(formElement, buttonElement, obj);
    });
  });
    toggleButttonState(formElement, buttonElement, obj);
};
  
function checkInputValidity(formElement, input) {
  if (input.checkValidity()) {
    hideError(formElement, input, obj);
  } else {
    showError(formElement, input, obj);
  }
};
  
function toggleButttonState(formElement, buttonElement, { inactiveButtonClass, ...rest }) {
  if (formElement.checkValidity()) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  } else {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }
};
  
function enableValidation({ formSelector, ...rest }) {
  const formElements = Array.from(document.querySelectorAll(formSelector));
  
  formElements.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(form, obj);
  });
};
  
enableValidation(obj);
  