export class Card {
  constructor(
    elementsCardName,
    elementsCardLink,
    templateSelector,
    handlePopupImagess
  ) {
    this._elementsCardName = elementsCardName;
    this._elementsCardLink = elementsCardLink;
    this._template = document.querySelector(templateSelector);
    this.handlePopupImagess = handlePopupImagess;
  }

  render(elementsListCard) {
    this._elementTemplate = this._template.content.cloneNode(true);
    this._elementTemplateImage = this._elementTemplate.querySelector(
      ".elements__image"
    );

    this._elementTemplate.querySelector(
      ".elements__text"
    ).innerText = this._elementsCardName;
    this._elementTemplateImage.setAttribute("src", this._elementsCardLink);
    this._elementTemplateImage.setAttribute("alt", this._elementsCardName);

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
      this.handlePopupImagess()
    );

    elementsListCard.prepend(this._elementTemplate);
  }
}
