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

    this._element.querySelector(".elements__image").setAttribute("src", this._сardLink);
    this._element.querySelector(".elements__image").setAttribute("alt", this._сardName);
    this._element.querySelector(".elements__text").innerText = this._сardName;

    this._setEventListeners();
    this._handleLike();
    this._handleDeleteCard();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".elements__image").addEventListener("click", () =>
        this.handlePopupImagess({ name: this._сardName, link: this._сardLink })
      );
  }

  _handleLike() {
    this._buttonTouchLike = this._element.querySelector(".elements__like");
    this._buttonTouchLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });
  }

  _handleDeleteCard() {
    this._buttonRemove = this._element.querySelector(".elements__remove");
    this._buttonRemove.addEventListener("click", function removeElementList(
      evt
    ) {
      evt.target.closest(".elements__element").remove();
    });
  }
}
