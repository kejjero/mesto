import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._confirmButton =document.querySelector('.popup__button_card-delete')
    }

    confirmHandler(data) {
        this._confirmHandler = data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._confirmHandler();
        })
    }
}