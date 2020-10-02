const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

const popupToggle = () => {
  popup.classList.toggle("popup_opened");
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);
let formElement = document.querySelector(".popup__container");

function formSubmitHandler (evt) {
 evt.preventDefault(); 
 let nameInput = document.querySelector(".popup__text_type_name");
 let jobInput = document.querySelector(".popup__text_type_job");
 let nameReadet = document.querySelector(".profile__title"); 
 let jobReadet = document.querySelector(".profile__subtitle");
 nameReadet.textContent = nameInput.value;
 jobReadet.textContent = jobInput.value;
 popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler); 