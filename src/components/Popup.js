export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
        }
    }

    open(){
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) =>{
            this._handleEscClose(evt);
        });
    }

    close(){
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt)=>{
            this._handleEscClose(evt);
        });
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
