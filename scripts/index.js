const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close");
const profilePopup = document.querySelector(".popup");
const nameInput = profilePopup.querySelector(".popup__text_type_name");
const jobInput = profilePopup.querySelector(".popup__text_type_job");
const nameReadet = document.querySelector(".profile__title");
const jobReadet = document.querySelector(".profile__subtitle");
const formElement = profilePopup.querySelector(".popup__container");
const profileErrorName = profilePopup.querySelector("#name-card-error");
const profileErrorJob = profilePopup.querySelector("#job-card-error");
const profileErrorButton = profilePopup.querySelector(".popup__button-submit");

const closePopup = () => {
  profilePopup.classList.toggle("popup_opened");
};

const openPopup = () => {
  profilePopup.classList.toggle("popup_opened");
  nameInput.value = nameReadet.textContent;
  jobInput.value = jobReadet.textContent;

  eraseError(profileErrorName, nameInput);
  eraseError(profileErrorJob, jobInput);

  profileErrorButton.removeAttribute("disabled");
  profileErrorButton.classList.remove("popup-input__button_disabled");

  escapePopupProfile();

  clickedPopupProfile();
};

buttonOpenPopup.addEventListener("click", openPopup);
buttonClosePopup.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameReadet.textContent = nameInput.value;
  jobReadet.textContent = jobInput.value;
  closePopup();
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
const template = document.querySelector(".template");
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

const closePopupAdd = () => {
  popupAdd.classList.toggle("popup-add_opened");
};

const openPopupAdd = () => {
  popupAdd.classList.toggle("popup-add_opened");
  stackName.value = "";
  stackLink.value = "";

  eraseError(placeErrorName, stackName);
  eraseError(placeErrorLink, stackLink);

  placeErrorButton.setAttribute("disabled", true);
  placeErrorButton.classList.add("popup-input__button_disabled");

  escapePopupAdd();

  clickedPopupAdd();
};

buttonOpenPopupAdd.addEventListener("click", openPopupAdd);
buttonClosePopupAdd.addEventListener("click", closePopupAdd);

const getElement = (element) => {
  const elementTemplate = template.content.cloneNode(true);
  const elementTemplateImage = elementTemplate.querySelector(
    ".elements__image"
  );

  elementTemplate.querySelector(".elements__text").innerText = element.name;
  elementTemplateImage.setAttribute("src", element.link);
  elementTemplateImage.setAttribute("alt", element.name);

  const buttonTouchLike = elementTemplate.querySelector(".elements__like");
  buttonTouchLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like_active");
  });

  const buttonRemove = elementTemplate.querySelector(".elements__remove");
  buttonRemove.addEventListener("click", function removeElementList(evt) {
    evt.target.closest(".elements__element").remove();
  });

  const handlePopupImages = () => {
    popupImage.classList.toggle("popup-images_opened");
    popupImagesItem.setAttribute("src", element.link);
    popupImagesText.innerText = element.name;

    escapePopupImage();

    clickedPopupImage();
  };

  elementTemplateImage.addEventListener("click", handlePopupImages);

  return elementTemplate;
};

const renderList = () => {
  const items = initialCards.map(getElement);
  elementsList.append(...items);
};

const addElementList = (evt) => {
  evt.preventDefault();
  const stack = getElement({ name: stackName.value, link: stackLink.value });
  elementsList.prepend(stack);
  closePopupAdd();
};

formElementAdd.addEventListener("submit", addElementList);

renderList();

const closePopupImage = () => {
  popupImage.classList.toggle("popup-images_opened");
};

buttonClosePopupImage.addEventListener("click", closePopupImage);

const escapePopupProfile = () => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      profilePopup.classList.remove("popup_opened");
    }
  });
};

const escapePopupAdd = () => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popupAdd.classList.remove("popup-add_opened");
    }
  });
};

const escapePopupImage = () => {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popupImage.classList.remove("popup-images_opened");
    }
  });
};

const clickedPopupProfile = () => {
  profilePopup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      return evt.target.classList.toggle("popup_opened");
    }
  });
};

const clickedPopupAdd = () => {
  popupAdd.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup-add_opened")) {
      return evt.target.classList.toggle("popup-add_opened");
    }
  });
};

const clickedPopupImage = () => {
  popupImage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup-images_opened")) {
      return evt.target.classList.toggle("popup-images_opened");
    }
  });
};

const eraseError = (itemError, itemInpit) => {
  itemError.textContent = "";
  itemInpit.classList.remove("popup-input_type_error");
};


