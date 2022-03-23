import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = popupSelector.querySelector(".popup__image");
        this._subtitle = popupSelector.querySelector('.popup__subtitle');
    }

    open(data) {
        super.open();
        this._subtitle.textContent = data.name;
        this._image.src = data.link;
        this._image.alt = data.link;
    }
} 