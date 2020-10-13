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

const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");

const popupAddToggleClose = () => {
    popupAdd.classList.toggle("popup-add_opened");
  }
  
  const popupAddToggleOpen = () => {
    popupAdd.classList.toggle("popup-add_opened");
  }
  
  buttonOpenPopupAdd.addEventListener("click", popupAddToggleOpen);
  buttonClosePopupAdd.addEventListener("click", popupAddToggleClose);

const getElement = (element) => {
    const elementTemplate = document.querySelector('.template').content.cloneNode(true);
    elementTemplate.querySelector('.elements__text').innerText = element.name;
    elementTemplate.querySelector('.elements__image').setAttribute('src',element.link);
    elementTemplate.querySelector('.elements__image').setAttribute('alt',element.name);

    return elementTemplate;
};

const renderList = () => {
   const items = initialCards.map( item => 
    getElement(item));

    elementsList.append(...items);
}

const addElementList = (evt) => {
    evt.preventDefault(); 
    const stack = getElement({name: stackName.value, link: stackLink.value});

    elementsList.prepend(stack);

    stackName.value='';
    stackLink.value='';
    popupAddToggleClose();
}

formElementAdd.addEventListener('submit', addElementList);

renderList();