import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageContent = document.querySelector('.popup__image-content');
        this._popupImageCaption = document.querySelector('.popup__image-caption');

    }

    open(name, link) {
        this._popupImageContent.src = link;
        this._popupImageCaption.textContent = name;
        this._popupImageContent.alt = name;
        super.open();
    }
}