export default class Api {
    constructor({address, cohortId, token}) {
        this._address = address;
        this._token = token;
        this._cohortId = cohortId;
    }

    getProfileInfo() {
        return fetch(`${this._address}/${this._cohortId}/users/me`, {
            headers: {
                authorization: this._token
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка ${response.status}`)
        });
    }

    getInitialCards(){
        return fetch(`${this._address}/${this._cohortId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
          .then(response => {
              if (response.ok) {
                  return response.json();
              }

              return Promise.reject(`Ошибка: ${response.status}`);
          })
    }

    editProfileInfo(userData){
        return fetch(`${this._address}/${this._cohortId}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`Ошибка: ${response.status}`);
            })
    }

    addNewCard(cardData){
        return fetch(`${this._address}/${this._cohortId}/cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(response =>{
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`Ошибка: ${response.status}`);
            })
        
    }

    //DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId 

    deleteCard(cardId) {
        return fetch(`${this._address}/${this._cohortId}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        })
            .then(response =>{
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка: ${response.status}`);
            })

    }

    addLikeCard(cardId) {
        return fetch(`${this._address}/${this._cohortId}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: {
                authorization: this._token
            }
        })
            .then(response =>{
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`Ошибка: ${response.status}`);
            })

    }

    cancelLikeCard(cardId){
        return fetch(`${this._address}/${this._cohortId}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        })
            .then(response =>{
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка: ${response.status}`);
            })
    }

    editProfilePhoto(avatarLink){
        return fetch(`${this._address}/${this._cohortId}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarLink.link,
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(`Ошибка: ${response.status}`);
            })

    }



}