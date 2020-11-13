export class Card {
  constructor(
    сardName,
    сardLink,
    templateSelector,
    handlePopupImagess
  ) {
    this._сardName = сardName;
    this._сardLink = сardLink;
    this._template = document.querySelector(templateSelector);
    this.handlePopupImagess = handlePopupImagess;
  }


//   _setEventListeners
// _getTemplate
// _handleLike
// _handleDeleteCard
// getView
  
    getView() {
    this._elementTemplate = this._template.content.cloneNode(true);
    this._elementTemplateImage = this._elementTemplate.querySelector(
      ".elements__image"
    );


    this._elementTemplate.querySelector(
      ".elements__text"
    ).innerText = this._сardName;
    this._elementTemplateImage.setAttribute("src", this._сardLink);
    this._elementTemplateImage.setAttribute("alt", this._сardName);



    this._buttonTouchLike = this._elementTemplate.querySelector(
      ".elements__like"
    );
    this._buttonTouchLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });



    this._buttonRemove = this._elementTemplate.querySelector(
      ".elements__remove"
    );
    this._buttonRemove.addEventListener("click", function removeElementList(
      evt
    ) {
      evt.target.closest(".elements__element").remove();
    });




    this._elementTemplateImage.addEventListener("click", () =>

      this.handlePopupImagess({
        name: this._сardName, 
        link: this._сardLink
      })

    );

    return this._elementTemplate;
  }
}


// getView() {
//   this._elementTemplate = this._template.content.cloneNode(true);
//   this._elementTemplateImage = this._elementTemplate.querySelector(
//     ".elements__image"
//   );

//   this._elementTemplate.querySelector(
//     ".elements__text"
//   ).innerText = this._сardName;
//   this._elementTemplateImage.setAttribute("src", this._сardLink);
//   this._elementTemplateImage.setAttribute("alt", this._сardName);

//   this._buttonTouchLike = this._elementTemplate.querySelector(
//     ".elements__like"
//   );
//   this._buttonTouchLike.addEventListener("click", function (evt) {
//     evt.target.classList.toggle("elements__like_active");
//   });

//   this._buttonRemove = this._elementTemplate.querySelector(
//     ".elements__remove"
//   );
//   this._buttonRemove.addEventListener("click", function removeElementList(
//     evt
//   ) {
//     evt.target.closest(".elements__element").remove();
//   });

//   this._elementTemplateImage.addEventListener("click", () =>
//     this.handlePopupImagess()
//   );

  // elementsListCard.prepend(this._elementTemplate);

//   return this._elementTemplate;
// }







// const getElement = (element) => {
//   const listItem = new Card(
//     element.name,
//     element.link,
//     ".template",
//     handlePopupImages
//   );
//   const card = listItem.getView()
//   return card
// };