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


function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileBio.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}


editBtn.addEventListener('click', openPopup); 
closeBtn.addEventListener('click', closePopup); 

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleSubmitForm (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
                  
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileBio.textContent = jobInput.value;
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleSubmitForm); 