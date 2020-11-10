export class Card {
  constructor(elementsCardName, elementsCardLink, templateSelector) {   
    this._elementsCardName = elementsCardName;
    this._elementsCardLink = elementsCardLink;
    this._template = document.querySelector(templateSelector);
  }

  render(elementsListCard) {
    this._elementTemplate = this._template.content.cloneNode(true);
    this._elementTemplateImage = this._elementTemplate.querySelector(".elements__image");

    this._elementTemplate.querySelector(".elements__text").innerText = this._elementsCardName;
    this._elementTemplateImage.setAttribute("src", this._elementsCardLink);
    this._elementTemplateImage.setAttribute("alt", this._elementsCardName);


    this._buttonTouchLike = this._elementTemplate.querySelector(".elements__like");
    this._buttonTouchLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
      });

    
    this._buttonRemove = this._elementTemplate.querySelector(".elements__remove");
    this._buttonRemove.addEventListener("click", function removeElementList(evt) {
      evt.target.closest(".elements__element").remove();
    });

    this._elementTemplateImage.addEventListener("click", () => this._handlePopupImages());


    elementsListCard.prepend(this._elementTemplate);                  
  }

  _handlePopupImages() {
    openPopup(popupImage);

    popupImagesItem.setAttribute("src", this._elementsCardLink);
    popupImagesItem.setAttribute("alt", this._elementsCardName);
    popupImagesText.innerText = this._elementsCardName;
  }

}
  

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
    
import {openPopup, popupImage, popupImagesItem, popupImagesText} from './index.js';