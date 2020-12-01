const avatar = new URL('../images/profile-kusto.png', import.meta.url);
const logo = new URL('../images/header-logo.svg', import.meta.url);
import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import {initialCards} from "../components/initial-сards.js";
import {validationConfig, buttonOpenPopup, profilePopup, nameInput, jobInput, elementsList, addPopup, 
  popupImage, buttonOpenPopupAdd, popupAdd, itemProfile, popupProfileContainer, popupAddContainer} from "../utils/constants.js";

const popupProfile = new Popup(profilePopup);


const user = new UserInfo(itemProfile);

const popupProfileForm = new PopupWithForm(profilePopup,handleFormSubmit); 

const handlePopupProfile = () => {
  popupProfileForm.open();

  const infoProfile = user.getUserInfo();

  nameInput.value = infoProfile.name;
  jobInput.value = infoProfile.job;


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

function createCard(element) {
  
  const listItem = new Card(
    element.name,
    element.link,
    ".template",
    handlePopupImages
  );
  const card = listItem.getView();

  return card;
}


const cardsList = new Section({
  data: initialCards,
  renderer: (element) => {

    const card = createCard(element);
  
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

    const card = createCard(element);
    
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

const profileValidator = new FormValidator(validationConfig, popupProfileContainer);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupAddContainer);
addCardValidator.enableValidation();





