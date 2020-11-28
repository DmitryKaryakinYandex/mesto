const avatar = new URL('./images/profile-kusto.png', import.meta.url);
const logo = new URL('./images/header-logo.svg', import.meta.url);
import "./pages/index.css";
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from "./components/UserInfo.js";

const buttonOpenPopup = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup-profile");
const nameInput = profilePopup.querySelector(".popup-profile__text_type_name");
const jobInput = profilePopup.querySelector(".popup-profile__text_type_job");
const elementsList = document.querySelector(".elements");
const addPopup = document.querySelector(".popup-add");
const popupImage = document.querySelector(".popup-images");
const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const initialCards = [
  {
    name: "Крым",
    link:
      "https://images.unsplash.com/photo-1599758417353-3b66f35e5d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Алтай",
    link:
      "https://images.unsplash.com/photo-1598394188724-cdeb618eb4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80",
  },
  {
    name: "Карелия",
    link:
      "https://images.unsplash.com/photo-1573156667788-3b0a869a97b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Санкт-Петербург",
    link:
      "https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Дагестан",
    link:
      "https://images.unsplash.com/photo-1591635765226-a7e6533655d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup-input__button_disabled",
  inputErrorClass: "popup-input_type_error",
};


const popupProfile = new Popup(profilePopup);

const user = new UserInfo(".profile__title",".profile__subtitle");

const popupProfileForm = new PopupWithForm(profilePopup,handleFormSubmit); 

const handlePopupProfile = () => {
  popupProfileForm.open();

  const infoProfile = user.getUserInfo();

  nameInput.value = infoProfile.getNameProfile;
  jobInput.value = infoProfile.getJobProfile;

  profileValidator.eraseErrors();

  profileValidator.enableButton();
};

buttonOpenPopup.addEventListener("click", handlePopupProfile);

popupProfileForm.setEventListeners();

function handleFormSubmit(obj) {
  const name =  obj.popupName;
  const job = obj.popupJob;
  user.setUserInfo({name,job});

  popupProfile.close();
}

const popupAddCard = new Popup(popupAdd);

const handlePopupAdd = () => {
  popupAddCard.open();

  addCardValidator.eraseErrors();

  addCardValidator.disableButton();
};

buttonOpenPopupAdd.addEventListener("click", handlePopupAdd);

popupAddCard.setEventListeners();

const popupImages = new Popup(popupImage);

const popupWithImages = new PopupWithImage(popupImage);

let handlePopupImages = (element) => {
  popupWithImages.open(element);
};

const cardsList = new Section({
  data: initialCards,
  renderer: (element) => {

    const listItem = new Card(
      element.name,
      element.link,
      ".template",
      handlePopupImages
    );
    
    const card = listItem.getView();
    cardsList.setItem(card);
  },
},
elementsList
); 

cardsList.renderItems();

const addElementList = (obj) => {
  const cardNew = [{ name: obj.popupNamePlace, link: obj.popupLinkPlace}];

  const cardsAdd = new Section({
  data: cardNew,
  renderer: (element) => {
    const listItem = new Card(
      element.name,
      element.link,
      ".template",
      handlePopupImages
    );  
    const card = listItem.getView();
    
    cardsAdd.setItem(card);
  },
},
elementsList
); 

cardsAdd.renderItems();
  
  popupAddForm.close();                                       
};

const popupAddForm = new PopupWithForm(addPopup,addElementList);

popupAddForm.setEventListeners();
popupImages.setEventListeners();

const profileValidator = new FormValidator(obj, ".popup-profile__container");
profileValidator.enableValidation();

const addCardValidator = new FormValidator(obj, ".popup-add__container");
addCardValidator.enableValidation();


