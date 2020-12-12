export class Card {
  constructor(сardName, сardLink, cardLike, owner, elementId, templateSelector, handlePopupImagess, handleDeleteCard, userId, handleLike, handleDislike) {
    this._сardName = сardName;
    this._сardLink = сardLink;
    this._cardLike = cardLike;
    this.owner = owner;
    this.elementId = elementId;
    this._template = templateSelector;
    this.handlePopupImagess = handlePopupImagess;
    this.handleDeleteCard = handleDeleteCard;
    this.userId = userId;
    this.handleLike = handleLike;
    this.handleDislike = handleDislike;
  }

  _hasIdLike (_id) {
    return itemLike => itemLike._id === _id;
  }

  _someLike() {
  return this._cardLike.some(this._hasIdLike(this.userId));
  }

  _getTemplate() {
    const _card = document.querySelector(this._template).content.querySelector('.elements__element').cloneNode(true);
    return _card;
  }

  getView() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.setAttribute("src", this._сardLink);
    this._cardImage.setAttribute("alt", this._сardName);
    this._element.querySelector(".elements__text").innerText = this._сardName;
    this._element.querySelector(".elements__like-count").innerText = this._cardLike.length;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
    this.handlePopupImagess({ name: this._сardName, link: this._сardLink }));
   
    this.card = {id :this.elementId, element :this._element}; 
    
    this._buttonTouchLike = this._element.querySelector(".elements__like");
    this._buttonTouchLike.addEventListener("click", () => {
                         
     if (this._someLike()){
      this.handleDislike(this.card);
     } else
     {
      this.handleLike(this.card);
     }

    });

    this._buttonRemove = this._element.querySelector(".elements__remove");

    if (this.userId === this.owner._id){
      this._buttonRemove.addEventListener("click", () => this.handleDeleteCard(this.card));
    }
    else
    {
      this._buttonRemove.remove();
    }

  }

  togglelike(count, infoLikeNew) {
    this._element.querySelector(".elements__like-count").innerText = count;
    this._buttonTouchLike.classList.toggle("elements__like_active");
    this._cardLike = infoLikeNew;
  }

}