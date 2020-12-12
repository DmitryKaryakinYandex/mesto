const avatar = new URL('../images/profile-kusto.png', import.meta.url);
const logo = new URL('../images/header-logo.svg', import.meta.url);
import Api from "../components/api.js";
import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from "../components/UserInfo.js";
import {validationConfig, buttonOpenPopup, profilePopup, nameInput, jobInput, elementsList, addPopup, 
  popupImage, buttonOpenPopupAdd, popupAdd, itemProfile, popupProfileContainer, popupAddContainer, template, 
  popupRemove, avatarPopup, buttonOpenPopupAvatar, imagePopupAvatar, popupAvatarContainer, profileButtonSubmit, 
  addButtonSubmit, avatarButtonSubmit, profileTitle, profileSubtitle, profileImage} from "../utils/constants.js";

  let userId = null;

function renderLoading(selectorSubmit,isLoading){
  if(isLoading){
    selectorSubmit.innerHTML = "Сохранение...";
  }
  else{
    selectorSubmit.innerHTML = "Сохранить";
  }
}

  const popupRemoves = new PopupWithSubmit(popupRemove, handleCardRemove);
  popupRemoves.setEventListeners();

  function handleCardRemove(card){
  
    api.deleteCard(card.id)
    .then((res) => { 
      if(res){
        card.element.remove();
        popupRemoves.close();
    }
  })
    .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); });
  }

const popupAvatarForm = new PopupWithForm(avatarPopup,changeAvatar); 

function changeAvatar(obj) {
  renderLoading(avatarButtonSubmit,true);
api.setAvatarData(obj)
  .then((res) => { console.log(obj);
    imagePopupAvatar.src = obj.popupLinkAvatar;
    popupAvatarForm.close();

  })
  .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); })
  .finally(() => {renderLoading(avatarButtonSubmit,false);});                                         
}

const handlePopupAvatar = () => {
  popupAvatarForm.open();

  avatarCardValidator.eraseErrors();

  avatarCardValidator.disableButton();
};

buttonOpenPopupAvatar.addEventListener("click", handlePopupAvatar);

popupAvatarForm.setEventListeners();

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-18",
  headers: {
    Authorization: "53591a9c-27ab-4f2d-943b-e7b06beb1a43",
    "content-type": "application/json"
  }
});

const popupProfile = new Popup(profilePopup);

const user = new UserInfo(itemProfile);

function dataUser() {
  const userItem = api.getUserData();
 userItem.then((data) =>{
    
  userId = data._id;                                                        

    profileTitle.textContent = data.name;
    profileSubtitle.textContent = data.about;
    profileImage.src = data.avatar;
  })
  .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); });                    
}

dataUser();


function hasIdLike (_id) {
  return itemLike => itemLike._id === _id;
}

function someLike(pullLike,userId) {
return pullLike.some(hasIdLike(userId));
}

function createCard(element,userId) {

  const listItem = new Card(
    element.name,
    element.link,
    element.likes,
    element.owner,
    element._id,
    template,
    handlePopupImages,
    handleDeleteCard,
    userId,
    handleLike,
    handleDislike                               
  );
  const card = listItem.getView();

  if (someLike(element.likes, userId)) {
    card.querySelector(".elements__like").classList.add("elements__like_active")}

  function handleLike(card) {
    api.likeCard(card.id)
    .then((res) => {
      listItem.togglelike(res.likes.length, res.likes);
    })
    .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); });
  }

  function handleDislike(card) {
    api.dislikeCard(card.id)
    .then((res) => {
      listItem.togglelike(res.likes.length, res.likes);
    })
    .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); });
  }

  return card;
}

let handleDeleteCard = (card) => {
  
  popupRemoves.getCardId(card);
  popupRemoves.open();
};

api.getCardData();
const cards = api.getCardData();
cards.then((res) =>{
  

const cardsList = new Section({
  data: res,
  renderer: (element) => {

    const card = createCard(element,userId);

    cardsList.setItem(card);
  },
},
elementsList
); 

cardsList.renderItems();
})                                                                                                       
  .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); });                 

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
renderLoading(profileButtonSubmit,true);                                                                                           
  api.setUserData({name,job})                                                               
    .then((res) => console.log("Запрос успешно обработан"))                                              
    .catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); })          
    .finally(() => {renderLoading(profileButtonSubmit,false);});                                                                  
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

const addElementList = (obj) => {
  renderLoading(addButtonSubmit,true);
  api.addCard({ name: obj.popupNamePlace, link: obj.popupLinkPlace})
  
  .then((res) => {

  const cardNew = [{ name: res.name, link: res.link, likes: res.likes, owner: res.owner, _id : res._id}]; 

  const cardsAdd = new Section({
  data: cardNew,
  
  renderer: (element) => {
    
    const card = createCard(element,userId);
    
    cardsAdd.setItem(card);
  },
},
elementsList
); 
cardsAdd.renderItems(); 
 
popupAddForm.close(); 
})

.catch((err) => { console.log(`Не удалось выполнить загрузку по причине:${err}`); })
.finally(() => {renderLoading(addButtonSubmit,false);});                                             
};

const popupAddForm = new PopupWithForm(addPopup,addElementList);

popupAddForm.setEventListeners();
popupImages.setEventListeners();

const profileValidator = new FormValidator(validationConfig, popupProfileContainer);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupAddContainer);
addCardValidator.enableValidation();

const avatarCardValidator = new FormValidator(validationConfig, popupAvatarContainer);
avatarCardValidator.enableValidation();





