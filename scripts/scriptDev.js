const initialCards = [
  { name: 'Крым', link: 'https://images.unsplash.com/photo-1599758417353-3b66f35e5d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'},
  { name: 'Алтай', link: 'https://images.unsplash.com/photo-1598394188724-cdeb618eb4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80'},
  { name: 'Карелия', link: 'https://images.unsplash.com/photo-1573156667788-3b0a869a97b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'},
  { name: 'Санкт-Петербург', link: 'https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
  { name: 'Дагестан',link: 'https://images.unsplash.com/photo-1591635765226-a7e6533655d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80'},
  { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
]; 


const elementsList = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup-add__container');
const stackName = document.querySelector('.popup-add__text_type_name');
const stackLink = document.querySelector('.popup-add__text_type_link');
const template = document.querySelector('.template');
const popupImage = document.querySelector('.popup-images');
const buttonClosePopupImage = document.querySelector('.popup-images__close');
const popupImagesItem = document.querySelector('.popop-images__item');
const popupImagesText = document.querySelector('.popop-images__text');

const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");

const popupAddToggleClose = () => {
    popupAdd.classList.toggle("popup-add_opened");
    stackName.value='';
    stackLink.value='';
  };
  
  const popupAddToggleOpen = () => {
    popupAdd.classList.toggle("popup-add_opened");
  };
  
  buttonOpenPopupAdd.addEventListener("click", popupAddToggleOpen);
  buttonClosePopupAdd.addEventListener("click", popupAddToggleClose);

const getElement = (element) => {
    // const elementTemplate = document.querySelector('.template').content.cloneNode(true);
    const elementTemplate = template.content.cloneNode(true);
    elementTemplate.querySelector('.elements__text').innerText = element.name;
    elementTemplate.querySelector('.elements__image').setAttribute('src',element.link);
    elementTemplate.querySelector('.elements__image').setAttribute('alt',element.name);
    
    const buttonTouchLike = elementTemplate.querySelector('.elements__like');
    buttonTouchLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });

    const buttonRemove = elementTemplate.querySelector('.elements__remove');
    buttonRemove.addEventListener("click", function removeElementList(evt){
      evt.target.closest('.elements__element').remove();
    });

    const popupImages = () => {
      popupImage.classList.toggle('popup-images_opened');
      popupImagesItem.setAttribute('src', element.link);
      popupImagesText.innerText = element.name;
    }

    const elementTemplateImage = elementTemplate.querySelector('.elements__image');
    elementTemplateImage.addEventListener("click", popupImages);
    
    return elementTemplate;
};

const renderList = () => {
   const items = initialCards.map( item => 
    getElement(item));

    elementsList.append(...items);
};

const addElementList = (evt) => {
    evt.preventDefault(); 
    const stack = getElement({name: stackName.value, link: stackLink.value});

    elementsList.prepend(stack);
    popupAddToggleClose();
};

formElementAdd.addEventListener('submit', addElementList);

renderList();

const popupImageToggleClose = () => {                                          // переписать все тоглы-закрытия на одну функцию
  popupImage.classList.toggle("popup-images_opened");
};

buttonClosePopupImage.addEventListener("click",popupImageToggleClose);




