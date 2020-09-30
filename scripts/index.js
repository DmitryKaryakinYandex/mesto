const buttonOpenPopup = document.querySelector(".profile__edit-button");
const buttonClosePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

const popupToggle = () => {
    popup.classList.toggle("popup_opened");
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);


// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
let nameInput = document.querySelector(".popup__text_type_name");  // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__text_type_job");    // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
let nameReadet = document.querySelector(".profile__title"); 
let jobReadet = document.querySelector(".profile__subtitle");
    // Вставьте новые значения с помощью textContent
nameReadet.textContent = nameInput.value;
jobReadet.textContent = jobInput.value;
popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 