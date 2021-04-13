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

export const editBtn = document.querySelector('.profile__edtn-button_info');
export const editBtnPhoto = document.querySelector('.profile__edtn-button_photo');
export const addBtn = document.querySelector('.profile__add-button');
export const profilePhoto = document.querySelector('.profile__photo');
export const nameInput = document.querySelector('.popup__form-input_field_name');
export const jobInput = document.querySelector('.popup__form-input_field_bio');
export const cardForm = document.forms['card-form'];
export const profileForm = document.forms['profile-form'];
export const avatarForm = document.forms['avatar-form'];
export const cardContainer = '.cards';