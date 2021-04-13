import Popup from "./Popup.js";

export default class PopupWithFormConfirmation extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm.bind(this);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._submitBtn = this._popupElement.querySelector('.popup__submit-btn');
    }
        

    open(card, cardId) {
        super.open();
        this._card = card;
        this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._card, this._cardId);
            this.close();
        })
    }
}
