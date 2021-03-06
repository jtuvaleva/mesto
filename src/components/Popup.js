export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
        }
    }

    open(){
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = "Сохранение...";
        } else {
            this._submitBtn.textContent = this._submitBtn.value;
        }
    }

    setEventListeners(){
        this._closeBtn = this._popupElement.querySelector('.popup__close-btn');
        this._overlay = this._popupElement.querySelector('.popup__overlay');

        this._closeBtn.addEventListener('click', ()=>{
            this.close();
        });
        
        this._overlay.addEventListener('click', ()=>{
            this.close();
        });

    }
}
