let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let editBtn = document.querySelector('.profile__edtn-button');
let closeBtn = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-input_field_name');
let jobInput = document.querySelector('.popup__form-input_field_bio');


function openForm() {
    popup.classList.add('popup_opened');
}

function closeForm() {
    popup.classList.remove('popup_opened');
}


editBtn.addEventListener('click', openForm); 
closeBtn.addEventListener('click', closeForm); 

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    console.log(nameInput.value);
    console.log(jobInput.value);

    

                  
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileBio.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 