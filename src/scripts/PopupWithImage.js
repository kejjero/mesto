import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector)
        this._image = this._popup.querySelector(".popup__image");
        this._subtitle = this._popup.querySelector('.popup__subtitle');
    }

    open(data) {
        this._subtitle.textContent = data.name;
        this._image.src = data.link;
        this._image.alt = data.link;
        super.open();
    }
} 