export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup-input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup-input__button_disabled",
    inputErrorClass: "popup-input_type_error",
  };
  export const buttonOpenPopup = document.querySelector(".profile__edit-button");
  export const profilePopup = document.querySelector(".popup-profile");
  export const nameInput = profilePopup.querySelector(".popup-profile__text_type_name");
  export const jobInput = profilePopup.querySelector(".popup-profile__text_type_job");
  export const elementsList = document.querySelector(".elements");
  export const addPopup = document.querySelector(".popup-add");
  export const popupImage = document.querySelector(".popup-images");
  export const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
  export const popupAdd = document.querySelector(".popup-add");
  export const itemProfile = {profileTitle: ".profile__title", profileSubtitle: ".profile__subtitle"};
  export const popupProfileContainer = ".popup-profile__container";
  export const popupAddContainer = ".popup-add__container";