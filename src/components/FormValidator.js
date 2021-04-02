export default class FormValidator {
    constructor(validationSettings, formELement) {
        this._formSelector = validationSettings.formSelector;
        this._inputSelector = validationSettings.inputSelector;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;
        this._formElement = formELement;
    }

    enableValidation() {
        this._setEventListeners();
    }

    resetForm() {
        this.$buttonElement.setAttribute('disabled', true);
        this.$buttonElement.classList.add(this._inactiveButtonClass);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _toggleButtonState() {
        const hasInvalidInput = this._inputList.some((inputElement) => !inputElement.validity.valid);
        if (hasInvalidInput) {
            this.$buttonElement.setAttribute('disabled', true);
            this.$buttonElement.classList.add(this._inactiveButtonClass);
            
        } else {
            this.$buttonElement.removeAttribute('disabled');
            this.$buttonElement.classList.remove(this._inactiveButtonClass);
            
        }
    }

    _setEventListeners() {
        this.$buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

        this._formElement.addEventListener('reset', () => {
            this._inputList.forEach((inputElement) => {
                this._hideInputError(inputElement);
                this._toggleButtonState();
            })
        });

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
            this._toggleButtonState();
        });

        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
    }
}
