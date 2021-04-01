import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleSubmitForm = handleSubmitForm;
    }

    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._popupForm.querySelectorAll('.popup__form-input');
      
        // создаём пустой объект
        this._formValues = {};
      
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        // возвращаем объект значений
        return this._formValues;
    } 

    close() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners() {
        this._popupForm = document.querySelector(this._popupSelector).querySelector('.popup__form');
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
      }

}