import './index.css';

import {initialCards, validationSettings, 
        profileForm, cardForm, 
        editBtn, addBtn, saveBtn, 
        cardContainer,
        nameInput, jobInput} from '../utils/constant.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'

const profileValidator = new FormValidator(validationSettings, profileForm);
const cardValidator = new FormValidator(validationSettings, cardForm);

const popupImage = new PopupWithImage('.popup_type_image');

const createNewCard = (item) => {
    const card = new Card({obj: item,
                          handleCardClick: (name, link) =>{
                              popupImage.open(name, link);
                          }},
                        '.card-template').createCard();
    return card;
}

const cardList = new Section({
                items: initialCards,
                renderer: (item) => {
                    const cardElement = createNewCard(item);
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
                           const cardElement = createNewCard(tmpCard);
                           cardList.addItem(cardElement);
                       }
});

profileValidator.enableValidation();
cardValidator.enableValidation();

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

editBtn.addEventListener('click', ()=>{
    popupProfile.open();
    nameInput.value = userBio.getUserInfo().name;
    jobInput.value = userBio.getUserInfo().job;
});

addBtn.addEventListener('click', function(){
    popupCard.open();
    cardValidator.disableButton();
});

cardList.renderItem();