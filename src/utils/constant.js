export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://drive.google.com/uc?id=1mT1mQAerct9gJV6Elssbgj3oOJba-McZ',
    },
    {
      name: 'Ленинградская область',
      link: 'https://drive.google.com/uc?id=1dM1ldlEKFwQYmVUCNYJK-bkDg8pL0B3N'
    }, 
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Тульская область',
      link: 'https://drive.google.com/uc?id=1eIO2-RPpiU-86WLV-X1zWYvlMIWRW9t_'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_active'
};

export const profileName = document.querySelector('.profile__name');
export const profileBio = document.querySelector('.profile__bio');
export const editBtn = document.querySelector('.profile__edtn-button');
export const addBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_cards');
export const popupImage = '.popup_type_image';
export const popupImageContent = document.querySelector('.popup__image-content');
export const popupImageCaption = document.querySelector('.popup__image-caption');
export const nameInput = document.querySelector('.popup__form-input_field_name');
export const jobInput = document.querySelector('.popup__form-input_field_bio');
export const cardNameInput = document.querySelector('.popup__form-input_field_image-name');
export const cardLinkInput = document.querySelector('.popup__form-input_field_image-src');
export const saveBtn = popupCard.querySelector('.popup__submit-btn');
export const cardForm = document.forms['card-form'];
export const profileForm = document.forms['profile-form'];
export const cardContainer = '.cards';