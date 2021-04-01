import Popup from "./Popup.js";
import {popupImageContent, popupImageCaption} from "../utils/constant.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector, obj) {
        super(popupSelector);
        this._imgSrc = obj.src;
        this._imgName = obj.alt;

    }

    open() {
        super.open();
        super.setEventListeners();
        popupImageContent.src = this._imgSrc;
        popupImageCaption.textContent = this._imgName;
        popupImageContent.alt = this._imgName;
        
        super.open();
        super.setEventListeners();
        this.setEventListeners();
    }
}