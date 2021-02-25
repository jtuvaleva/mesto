const cardContainer = document.querySelector('.cards');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const editBtn = document.querySelector('.profile__edtn-button');
const addBtn = document.querySelector('.profile__add-button');
const closeProfile = document.querySelector('.popup__close-btn_area_profile');
const closeCard = document.querySelector('.popup__close-btn_area_card');
const closeImage = document.querySelector('.popup__close-btn_area_image');
const popupOverlay = document.querySelector('.popup_opened');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_cards');
const popupImage = document.querySelector('.popup_type_image');
const popupImageContent = popupImage.querySelector('.popup__image-content');
const popupImageCaption = popupImage.querySelector('.popup__image-caption');
const nameInput = document.querySelector('.popup__form-input_field_name');
const jobInput = document.querySelector('.popup__form-input_field_bio');
const cardNameInput = document.querySelector('.popup__form-input_field_image-name');
const cardLinkInput = document.querySelector('.popup__form-input_field_image-src');
const saveBtn = popupCard.querySelector('.popup__submit-btn');
const cardForm = document.forms['card-form'];

function closePopupWithEsc(evt) {
    const closeElement = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
      closePopup(closeElement);
    }
};

function closePopupWithOverlay(evt) {
    closePopup(evt.target);
};

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    popupElement.addEventListener('click', closePopupWithOverlay);
    document.addEventListener('keydown', closePopupWithEsc);
} 

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    popupElement.removeEventListener('click', closePopupWithOverlay);
    document.removeEventListener('keydown', closePopupWithEsc);
}

function openImage(name, link) {
    openPopup(popupImage);
    popupImageContent.src = link;
    popupImageCaption.textContent = name;
    popupImageContent.alt = name;
}

function likeImage(evt) {
    evt.target.classList.toggle('cards__like_active');
}


function deleteImage(evt) {
    evt.target.parentElement.remove();
}


function modifyCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__image');
    const cardImageText = cardElement.querySelector('.cards__text');
    const cardLikeButton = cardElement.querySelector('.cards__like');
    const cardDeleteButton = cardElement.querySelector('.cards__delete-btn');

    cardImageText.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    cardContainer.prepend(cardElement);

    cardImage.addEventListener('click', () => openImage(name, link));

    cardLikeButton.addEventListener('click', likeImage); 

    cardDeleteButton.addEventListener('click', deleteImage);

    return cardContainer;
}


function handleSubmitProfileInfo (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileBio.textContent = jobInput.value;
    closePopup(popupProfile);
}

function handleSubmitCard (evt) {
    evt.preventDefault(); 
    modifyCard(cardNameInput.value, cardLinkInput.value);
    closePopup(popupCard);
}


initialCards.forEach(function (item) {
    modifyCard(item.name, item.link);
});

editBtn.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileBio.textContent;
    openPopup(popupProfile);
}); 

addBtn.addEventListener('click', function(){
    cardForm.reset();
    openPopup(popupCard);
    saveBtn.classList.add('popup__submit-btn_disabled');
    saveBtn.setAttribute('disabled', true);
});


closeProfile.addEventListener('click', function () {
    closePopup(popupProfile);
}); 

closeCard.addEventListener('click', function () {
    closePopup(popupCard);
}); 


closeImage.addEventListener('click', function () {
    closePopup(popupImage);
}); 



popupProfile.addEventListener('submit', handleSubmitProfileInfo); 

popupCard.addEventListener('submit', handleSubmitCard);


