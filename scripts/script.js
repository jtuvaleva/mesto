let cardContainer = document.querySelector('.cards');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let editBtn = document.querySelector('.profile__edtn-button');
let addBtn = document.querySelector('.profile__add-button');
let closeProfile = document.querySelector('.popup__close-btn_area_profile');
let closeCard = document.querySelector('.popup__close-btn_area_card');
let closeImage = document.querySelector('.popup__close-btn_area_image');
let popupProfile = document.querySelector('.popup_type_profile');
let popupCard = document.querySelector('.popup_type_cards');
let popupImage = document.querySelector('.popup_type_image');
let formElement = document.querySelectorAll('.popup__form');
let nameInput = document.querySelector('.popup__form-input_field_name');
let jobInput = document.querySelector('.popup__form-input_field_bio');
let cardNameInput = document.querySelector('.popup__form-input_field_image-name');
let cardLinkInput = document.querySelector('.popup__form-input_field_image-src');


const initialCards = [
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


function openPopup(popupElement) {
    if (popupElement === popupProfile) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileBio.textContent;
    } else {
        cardNameInput.value = '';
        cardLinkInput.value = '';
    }
    
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function openImage(evt) {
  popupImage.classList.add('popup_opened');
  const eventTarget = evt.target;
  const imageSrc = eventTarget.src;
  const imageCapture = eventTarget.parentElement.querySelector('.cards__text').textContent;
  popupImage.querySelector('.popup__image-content').src = imageSrc;
  popupImage.querySelector('.popup__image-caption').textContent = imageCapture;
  popupImage.querySelector('.popup__image-content').alt = imageCapture;
}


function modifyCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    cardElement.querySelector('.cards__text').textContent = name;
    cardElement.querySelector('.cards__image').src = link;
    cardElement.querySelector('.cards__image').alt = name;

    cardContainer.prepend(cardElement);

    cardElement.querySelector('.cards__image').addEventListener('click', openImage);

    cardElement.querySelector('.cards__like').addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('cards__like_active');
    }); 

    cardElement.querySelector('.cards__delete-btn').addEventListener('click', function(evt){
      const eventTarget = evt.target;
      eventTarget.parentElement.remove();
    });

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
    openPopup(popupProfile);
}); 

addBtn.addEventListener('click', function(){
    openPopup(popupCard);
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


