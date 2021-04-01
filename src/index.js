import './pages/index.css';

import {initialCards, validationSettings, 
        profileForm, cardForm, 
        editBtn, addBtn, saveBtn,
        cardContainer,
        nameInput, jobInput} from './utils/constant.js'
import Card from './components/Card.js'
import FormValidator from './components/FormValidator.js'
import Section from './components/Section.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import UserInfo from './components/UserInfo.js'

const profileValidator = new FormValidator(validationSettings, profileForm);
const cardValidator = new FormValidator(validationSettings, cardForm);

const handleCardClick = (imagePopupSelector, item) => {
    const popupImage = new PopupWithImage(imagePopupSelector, item);
    popupImage.open();
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.card-template', handleCardClick); 
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    }},
    cardContainer);

const userBio = new UserInfo({userSelector:'.profile__name', 
                             jobSelector: '.profile__bio'});


const popupProfile = new PopupWithForm({popupSelector: '.popup_type_profile',   
                         handleSubmitForm: (formData)=>{
                             userBio.setUserInfo(formData)}
});


const popupCard = new PopupWithForm({popupSelector: '.popup_type_cards',
                       handleSubmitForm: (formData)=>{
                           const tmpCard = {'name': formData.cardName,
                                            'link': formData.cardLink};
                           const card = new Card(tmpCard, '.card-template', handleCardClick).createCard();
                           cardList.addItem(card);
                       }
});

profileValidator.enableValidation();
cardValidator.enableValidation();

popupProfile.setEventListeners();
popupCard.setEventListeners();


editBtn.addEventListener('click', ()=>{
    popupProfile.open();
    nameInput.value = userBio.getUserInfo().name;
    jobInput.value = userBio.getUserInfo().job;
    
});

addBtn.addEventListener('click', function(){
    popupCard.open();
    cardForm.reset();
    saveBtn.classList.add('popup__submit-btn_disabled');
    saveBtn.setAttribute('disabled', true);
    
});

cardList.renderItem();
