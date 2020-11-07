const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup-profile__close");
const profilePopup = document.querySelector(".popup-profile");
const nameInput = profilePopup.querySelector(".popup-profile__text_type_name");
const jobInput = profilePopup.querySelector(".popup-profile__text_type_job");
const nameReadet = document.querySelector(".profile__title");
const jobReadet = document.querySelector(".profile__subtitle");
const formElement = profilePopup.querySelector(".popup-profile__container");
const profileErrorName = profilePopup.querySelector("#name-card-error");
const profileErrorJob = profilePopup.querySelector("#job-card-error");
const profileErrorButton = profilePopup.querySelector(
  ".popup-profile__button-submit"
);

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
  document.removeEventListener("click", closePopupByOverlay);
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
  document.addEventListener("click", closePopupByOverlay);
};

const handlePopupProfile = () => {
  openPopup(profilePopup);

  nameInput.value = nameReadet.textContent;
  jobInput.value = jobReadet.textContent;

  eraseError(profileErrorName, nameInput);
  eraseError(profileErrorJob, jobInput);

  profileErrorButton.removeAttribute("disabled");
  profileErrorButton.classList.remove("popup-input__button_disabled");
};

buttonOpenPopup.addEventListener("click", handlePopupProfile);
buttonClosePopup.addEventListener("click", () => closePopup(profilePopup));

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameReadet.textContent = nameInput.value;
  jobReadet.textContent = jobInput.value;
  closePopup(profilePopup);
}

formElement.addEventListener("submit", handleFormSubmit);

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

const elementsList = document.querySelector(".elements");
const formElementAdd = document.querySelector(".popup-add__container");
const stackName = document.querySelector(".popup-add__text_type_name");
const stackLink = document.querySelector(".popup-add__text_type_link");
// const template = document.querySelector(".template");
const popupImage = document.querySelector(".popup-images");
const buttonClosePopupImage = document.querySelector(".popup-images__close");
const popupImagesItem = document.querySelector(".popop-images__item");
const popupImagesText = document.querySelector(".popop-images__text");
const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");
const placeErrorName = popupAdd.querySelector("#name-place-error");
const placeErrorLink = popupAdd.querySelector("#link-place-error");
const placeErrorButton = popupAdd.querySelector(".popup-add__button-submit");

const handlePopupAdd = () => {
  openPopup(popupAdd);

  stackName.value = "";
  stackLink.value = "";

  eraseError(placeErrorName, stackName);
  eraseError(placeErrorLink, stackLink);

  placeErrorButton.setAttribute("disabled", true);
  placeErrorButton.classList.add("popup-input__button_disabled");
};

buttonOpenPopupAdd.addEventListener("click", handlePopupAdd);
buttonClosePopupAdd.addEventListener("click", () => closePopup(popupAdd));

const getElement = (element) => {
  const listItem = new  Card(element.name,element.link,".template");
  listItem.render(elementsList);
  // const elementTemplate = template.content.cloneNode(true);
  // const elementTemplateImage = elementTemplate.querySelector(".elements__image");

  // elementTemplate.querySelector(".elements__text").innerText = element.name;
  // elementTemplateImage.setAttribute("src", element.link);
  // elementTemplateImage.setAttribute("alt", element.name);

  // const buttonTouchLike = elementTemplate.querySelector(".elements__like");
  // buttonTouchLike.addEventListener("click", function (evt) {
  //   evt.target.classList.toggle("elements__like_active");
  // });

  // const buttonRemove = elementTemplate.querySelector(".elements__remove");
  // buttonRemove.addEventListener("click", function removeElementList(evt) {
  //   evt.target.closest(".elements__element").remove();
  // });

  // const handlePopupImages = () => {
  //   openPopup(popupImage);

  //   popupImagesItem.setAttribute("src", element.link);
  //   popupImagesItem.setAttribute("alt", element.name);
  //   popupImagesText.innerText = element.name;
  // };

  // elementTemplateImage.addEventListener("click", handlePopupImages);

  // return elementTemplate;
};

  //////////////////&&&&&

// const renderList = () => {
//   const items = initialCards.map(getElement);
//   elementsList.append(...items);                     
// };

const addElementList = (evt) => {
  evt.preventDefault();
  const stack = getElement({ name: stackName.value, link: stackLink.value });
  // elementsList.prepend(stack);
  closePopup(popupAdd);
};

formElementAdd.addEventListener("submit", addElementList);

// renderList();

buttonClosePopupImage.addEventListener("click", () => closePopup(popupImage));

const eraseError = (itemError, itemInpit) => {
  itemError.textContent = "";
  itemInpit.classList.remove("popup-input_type_error");
};

const closePopupByEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

const closePopupByOverlay = (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};








//////////////////////////7777777777

import {Card} from './Card.js';

initialCards.forEach(getElement);

