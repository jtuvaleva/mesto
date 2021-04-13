import './index.css';

import {validationSettings,
        profilePhoto, 
        profileForm, cardForm, 
        editBtn, editBtnPhoto,
        addBtn,
        cardContainer,
        nameInput, jobInput} from '../utils/constant.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

const profileValidator = new FormValidator(validationSettings, profileForm);
const cardValidator = new FormValidator(validationSettings, cardForm);

const popupImage = new PopupWithImage('.popup_type_image');

const api = new Api({
            address: 'https://mesto.nomoreparties.co/v1',
            cohortId: 'cohort-22',
            token: '1ce66c26-e1b5-44dd-8df7-d34ef0ebc07d'
});

const userBio = new UserInfo({userSelector:'.profile__name', 
                             jobSelector: '.profile__bio',
                             avatarSelector: '.profile__photo'});

let ownerId;
let likeCounts;

api.getProfileInfo()
  .then(profileData => {
      userBio.setUserInfo(profileData);
      ownerId = userBio.getUserInfo().ownerId;
  })
  .catch(err => console.log(err));


const createNewCard = (item) => {
    const card = new Card({obj: item,
                          handleCardClick: (name, link) =>{
                              popupImage.open(name, link);
                          },
                          handleCardDelete: () => {
                            const confirmPopup = new PopupWithForm({popupSelector: '.popup_type_submit-delete',
                                                    handleSubmitForm: () => {
                                                          api.deleteCard(card.getId())
                                                              .then(() => {
                                                                  card.deleteImage();
                                                              })
                                                              .catch(error => console.log(error));
                                                    }});
                            
                            confirmPopup.open();
                        },
                        handleLike: () => {
                          if (card.getLikeStatus()) {
                            api.cancelLikeCard(card.getId())
                              .then((result) => {
                                likeCounts = result["likes"].length;
                                card.displayLikeNumber(likeCounts)
                              })
                              .catch(error => console.log(error));
                            card.likeImage();
                          } else {
                            api.addLikeCard(card.getId())
                              .then((result) => {
                                likeCounts = result["likes"].length;
                                card.displayLikeNumber(likeCounts);
                              })
                              .catch(error => console.log(error));
                            card.likeImage();
                          }
                        }
                      },
                        '.card-template')
    const cardElement = card.createCard(ownerId);
    return cardElement;
}

const cardList = new Section({
                renderer: (item) => {
                    const cardElement = createNewCard(item);
                    cardList.addItem(cardElement);
                }},
                cardContainer);


const popupProfile = new PopupWithForm({popupSelector: '.popup_type_profile',   
                         handleSubmitForm: (formData)=>{
                             popupProfile.renderLoading(true);
                             api.editProfileInfo(formData)
                               .then(result => {
                                 userBio.setUserInfo(result)
                               })
                               .catch(err => console.log(err))
                               .finally(popupProfile.renderLoading(false));
                             }
});


const popupCard = new PopupWithForm({popupSelector: '.popup_type_cards',
                       handleSubmitForm: (formData)=>{
                          popupCard.renderLoading(true);
                          api.addNewCard({...formData})
                            .then(result => {
                              cardList.addItem(createNewCard(result))
                            })
                            .catch(err => console.log(err))
                            .finally(popupCard.renderLoading(false));
                       }
});


const popupProfilePhoto = new PopupWithForm({popupSelector: '.popup_type_user-photo',
                              handleSubmitForm: (formData)=>{
                                  popupProfilePhoto.renderLoading(true);
                                  api.editProfilePhoto({...formData})
                                    .then(result => {
                                      userBio.setUserInfo(result);
                                    })
                                    .catch(err => console.log(err))
                                    .finally(popupProfilePhoto.renderLoading(false));
                              }
});

profileValidator.enableValidation();
cardValidator.enableValidation();


editBtn.addEventListener('click', ()=>{
    popupProfile.open();
    nameInput.value = userBio.getUserInfo().name;
    jobInput.value = userBio.getUserInfo().job;
});

addBtn.addEventListener('click', function(){
    popupCard.open();
    cardValidator.disableButton();
});

profilePhoto.addEventListener('mouseover', () => {
  editBtnPhoto.setAttribute("style", "display: flex")
})

editBtnPhoto.addEventListener('click', () => {
  popupProfilePhoto.open();
})

profilePhoto.addEventListener('mouseout', () => {
  editBtnPhoto.setAttribute("style", "display: none")
})

api.getInitialCards()
  .then(initialCards => {
    cardList.renderItem(initialCards);
  })
  .catch(err => console.log(err));