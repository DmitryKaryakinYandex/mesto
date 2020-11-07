export class Card {
  constructor(elementsCardname, elementsCardlink, templateSelector) {   ////elementsCard,
    this._elementsCardname = elementsCardname;
    this._elementsCardlink = elementsCardlink;
    this._template = document.querySelector(templateSelector);
  }

  render(elementsListCard) {
    this._elementTemplate = this._template.content.cloneNode(true);
    this._elementTemplateImage = this._elementTemplate.querySelector(".elements__image");

    this._elementTemplate.querySelector(".elements__text").innerText = this._elementsCardname;
    this._elementTemplateImage.setAttribute("src", this._elementsCardlink);
    this._elementTemplateImage.setAttribute("alt", this._elementsCardname);


    this._buttonTouchLike = this._elementTemplate.querySelector(".elements__like");
    this._buttonTouchLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
      });

    
  this._buttonRemove = this._elementTemplate.querySelector(".elements__remove");
  this._buttonRemove.addEventListener("click", function removeElementList(evt) {
    evt.target.closest(".elements__element").remove();
  });

    elementsListCard.prepend(this._elementTemplate);                   /////////////elementsList??
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




// export class Card {
//     constructor(elementsCard, templateSelector) {  
//       this._elementsCard.name = elementsCardname;
//       this._elementsCard.link = elementsCardlink;
//       this._template = document.querySelector(templateSelector);
//     }
  
//     render(elementsListCard) {
//       this._elementTemplate = this._template.content.cloneNode(true);
//       this._elementTemplateImage = this._elementTemplate.querySelector(".elements__image");
  
//       this._elementTemplate.querySelector(".elements__text").innerText = this._elementsCard.name;
//       this._elementTemplateImage.setAttribute("src", this._elementsCard.link);
//       this._elementTemplateImage.setAttribute("alt", this._elementsCard.name);
  
//       elementsListCard.append(this._elementTemplate);                  
//     }
  
//   }
    