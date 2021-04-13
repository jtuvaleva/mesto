import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleSubmitForm = handleSubmitForm.bind(this);
        this._popup = document.querySelector(this._popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__form-input');
        this._submitBtn = this._popup.querySelector('.popup__submit-btn');
        this._submitListener = this._submitListener.bind(this)
        this._formValues = {};
    }

    _getInputValues() {
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    } 

    close() {
        super.close();
        this._popupForm.reset();
        this._popupForm.removeEventListener('submit', this._submitListener);
    }

    _submitListener (evt) {
        evt.preventDefault();
        this._handleSubmitForm(this._getInputValues());
        this.close();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = "Сохранение...";
        } else {
            this._submitBtn.textContent = this._submitBtn.value;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submitListener)
      }

}