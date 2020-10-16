const initialCards = [
  { name: 'Эльбрус', link: '../images/element-grid-elbrus.png'},
  { name: 'Домбай', link: '../images/element-grid-dombay.png'},
  { name: 'Карачаева-Черкессия', link: '../images/element-grid-karachaevsk1.jpg'},
  { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  { name: 'Холмогорский район',link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
]; 


const elementsList = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup-add__container');
const stackName = document.querySelector('.popup-add__text_type_name');
const stackLink = document.querySelector('.popup-add__text_type_link');
const template = document.querySelector('.template');
const popupImage = document.querySelector('.popup-images');
const buttonClosePopupImage = document.querySelector('.popup-images__close');

const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");

const popupAddToggleClose = () => {
    popupAdd.classList.toggle("popup-add_opened");
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

    stackName.value='';
    stackLink.value='';
    popupAddToggleClose();
};

formElementAdd.addEventListener('submit', addElementList);

renderList();

const popupImageToggleClose = () => {                                          // переписать все тоглы-закрытия на одну функцию
  popupImage.classList.toggle("popup-images_opened");
};

buttonClosePopupImage.addEventListener("click",popupImageToggleClose);




