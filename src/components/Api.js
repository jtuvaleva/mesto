export default class Api {
    constructor({address, cohortId, token}) {
        this._address = address;
        this._token = token;
        this._cohortId = cohortId;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
 
    
    getProfileInfo() {
        return fetch(`${this._address}/${this._cohortId}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
        .then(this._checkResponse)
    }

    getInitialCards(){
        return fetch(`${this._address}/${this._cohortId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
          .then(this._checkResponse)
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
          .then(this._checkResponse)
    }

    addNewCard(cardData){
        return fetch(`${this._address}/${this._cohortId}/cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
          .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._address}/${this._cohortId}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        })
          .then(this._checkResponse)
    }

    addLikeCard(cardId) {
        return fetch(`${this._address}/${this._cohortId}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: {
                authorization: this._token
            }
        })
          .then(this._checkResponse)
    }

    cancelLikeCard(cardId){
        return fetch(`${this._address}/${this._cohortId}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        })
          .then(this._checkResponse)
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
          .then(this._checkResponse)
    }

}