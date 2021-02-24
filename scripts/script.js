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
const formElement = document.querySelectorAll('.popup__form');
const nameInput = document.querySelector('.popup__form-input_field_name');
const jobInput = document.querySelector('.popup__form-input_field_bio');
const cardNameInput = document.querySelector('.popup__form-input_field_image-name');
const cardLinkInput = document.querySelector('.popup__form-input_field_image-src');


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

function loadInput(popupElement) {
  if (popupElement === popupProfile) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileBio.textContent;
  } else {
      cardNameInput.value = '';
      cardLinkInput.value = '';
  }
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
} 

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function closePopupWithEsc(key) {
  const closeElement = document.querySelector('.popup_opened');
  if (key === "Escape") {
    closePopup(closeElement);
  }
};


function openImage(name, link) {
  openPopup(popupImage);
  popupImageContent.src = link;
  popupImageCaption.textContent = name;
  popupImageContent.alt = name;
}


function modifyCard(name, link) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__image');
    const cardImageText = cardElement.querySelector('.cards__text');

    cardImageText.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    cardContainer.prepend(cardElement);

    cardElement.querySelector('.cards__image').addEventListener('click', () => openImage(name, link));

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
    loadInput(popupProfile);
    openPopup(popupProfile);
}); 

addBtn.addEventListener('click', function(){
    loadInput(popupCard);
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

document.addEventListener('click', function(evt){
    closePopup(evt.target);
});

document.addEventListener('keydown', function(evt) {
    closePopupWithEsc(evt.key);
});

popupProfile.addEventListener('submit', handleSubmitProfileInfo); 

popupCard.addEventListener('submit', handleSubmitCard);


