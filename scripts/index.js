const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup-profile__close");
const profilePopup = document.querySelector(".popup-profile");
const nameInput = profilePopup.querySelector(".popup-profile__text_type_name");
const jobInput = profilePopup.querySelector(".popup-profile__text_type_job");
const name = document.querySelector(".profile__title");
const job = document.querySelector(".profile__subtitle");
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

  nameInput.value = name.textContent;
  jobInput.value = job.textContent;

  eraseError(profileErrorName, nameInput);
  eraseError(profileErrorJob, jobInput);

  profileErrorButton.removeAttribute("disabled");
  profileErrorButton.classList.remove("popup-input__button_disabled");
};

buttonOpenPopup.addEventListener("click", handlePopupProfile);
buttonClosePopup.addEventListener("click", () => closePopup(profilePopup));

function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
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
const placeName = document.querySelector(".popup-add__text_type_name");
const placeLink = document.querySelector(".popup-add__text_type_link");

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

  placeName.value = "";
  placeLink.value = "";

  eraseError(placeErrorName, placeName);
  eraseError(placeErrorLink, placeLink);

  placeErrorButton.setAttribute("disabled", true);
  placeErrorButton.classList.add("popup-input__button_disabled");
};

buttonOpenPopupAdd.addEventListener("click", handlePopupAdd);
buttonClosePopupAdd.addEventListener("click", () => closePopup(popupAdd));

const getElement = (element) => {
  let handlePopupImages = () => {
    openPopup(popupImage);

    popupImagesItem.setAttribute("src", element.link);
    popupImagesItem.setAttribute("alt", element.name);
    popupImagesText.innerText = element.name;
  };

  const listItem = new Card(
    element.name,
    element.link,
    ".template",
    handlePopupImages
  );
  listItem.render(elementsList);
};

const addElementList = (evt) => {
  evt.preventDefault();
  const card = getElement({ name: placeName.value, link: placeLink.value });
  // elementsList.prepend(card);
  closePopup(popupAdd);
};

formElementAdd.addEventListener("submit", addElementList);

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

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

initialCards.forEach(getElement);

const obj = {
  formSelector: ".popup__form",
  inputSelector: ".popup-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup-input__button_disabled",
  inputErrorClass: "popup-input_type_error",
};

const formValid1 = new FormValidator(obj, ".popup-profile__container");
formValid1.enableValidation();

const formValid2 = new FormValidator(obj, ".popup-add__container");
formValid2.enableValidation();
