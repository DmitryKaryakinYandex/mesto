const initialCards = [
    {
        name: 'Эльбрус',
        link: '../images/element-grid-elbrus.png'
    },
    {
        name: 'Домбай',
        link: '../images/element-grid-dombay.png'
    },
    {
        name: 'Карачаева-Черкессия',
        link: '../images/element-grid-karachaevsk1.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

const list = document.querySelector('.elements');

const renderList = () => {
const items =  initialCards.map( element => { 
       return `<div class="elements__element">
                 <img class="elements__image" src=${element.link} alt=${element.name}>
                 <div class="elements__group">
                   <h2 class="elements__text"> ${element.name} </h2>
                   <button class="elements__like" type="button" aria-label="Добавить лайк"></button>
                 </div>
                </div>`
            }).join('');

            list.insertAdjacentHTML('afterbegin', items);
};

renderList();



//////////////////////////////////////////////////2///////////////////////

const buttonOpenPopupAdd = document.querySelector(".profile__add-button");
const buttonClosePopupAdd = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");
          // let nameAddInput = document.querySelector(".popup-add__text_type_name");
          // let linkAddInput = document.querySelector(".popup-add__text_type_link");
          // let nameAddReadet = document.querySelector("#"); 
          // let linkAddReadet = document.querySelector("#");
let formAddElement = document.querySelector(".popup-add__container");


const popupAddToggleClose = () => {
  popupAdd.classList.toggle("popup-add_opened");
}

const popupAddToggleOpen = () => {
  popupAdd.classList.toggle("popup-add_opened");
}

buttonOpenPopupAdd.addEventListener("click", popupAddToggleOpen);
buttonClosePopupAdd.addEventListener("click", popupAddToggleClose);


formAddElement.addEventListener('submit', formAddSubmitHandler); 

        function formAddSubmitHandler (evt) {
         evt.preventDefault(); 
         nameAddReadet.textContent = nameInput.value;
         linkReadet.textContent = jobInput.value;
         popupToggleClose();
        }



