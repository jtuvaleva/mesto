import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm.bind(this);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._inputList = this._popupElement.querySelectorAll('.popup__form-input');
        this._submitBtn = this._popupElement.querySelector('.popup__submit-btn');
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
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        })
      }

}