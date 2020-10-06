const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__text_type_name");
let jobInput = document.querySelector(".popup__text_type_job");
let nameReadet = document.querySelector(".profile__title"); 
let jobReadet = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__container");

const popupToggleClose = () => {
  popup.classList.toggle("popup_opened");
}

const popupToggleOpen = () => {
  popup.classList.toggle("popup_opened");
  nameInput.value = nameReadet.textContent;
  jobInput.value = jobReadet.textContent;
}

buttonOpenPopup.addEventListener("click", popupToggleOpen);
buttonClosePopup.addEventListener("click", popupToggleClose);

function formSubmitHandler (evt) {
 evt.preventDefault(); 
 nameReadet.textContent = nameInput.value;
 jobReadet.textContent = jobInput.value;
 popupToggleClose();
}

formElement.addEventListener('submit', formSubmitHandler); 