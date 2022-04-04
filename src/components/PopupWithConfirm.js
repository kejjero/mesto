import Popup from "./Popup";
// Класс создания класса подтверждения удаления карточки
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton =document.querySelector('.popup__button_card-delete')
    }

    // Принимает коллбэк на удаление карточки
    confirmHandler(data) {
        this._confirmHandler = data;
    }

    // обработчик удаления карточки
    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._confirmHandler();
        })
    }
}
