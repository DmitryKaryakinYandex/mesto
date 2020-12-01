export class Card {
  constructor(сardName, сardLink, templateSelector, handlePopupImagess) {
    this._сardName = сardName;
    this._сardLink = сardLink;
    this._template = templateSelector;
    this.handlePopupImagess = handlePopupImagess;
  }

  _getTemplate() {
    const _card = document.querySelector(this._template).content.cloneNode(true);
    return _card;
  }

  getView() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.setAttribute("src", this._сardLink);
    this._cardImage.setAttribute("alt", this._сardName);
    this._element.querySelector(".elements__text").innerText = this._сardName;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
        this.handlePopupImagess({ name: this._сardName, link: this._сardLink })
      );

    this._buttonTouchLike = this._element.querySelector(".elements__like");
    this._buttonTouchLike.addEventListener("click", this._handleLike);

    this._buttonRemove = this._element.querySelector(".elements__remove");
    this._buttonRemove.addEventListener("click", this._handleDeleteCard);
  }

  _handleLike(evt) {
    evt.target.classList.toggle("elements__like_active");
  }

  _handleDeleteCard(evt) {
      evt.target.closest(".elements__element").remove();
    }
}

