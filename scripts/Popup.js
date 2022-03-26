export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._overlay = this._popup.querySelector('.popup__overlay')
        this._clossButton = this._popup.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
    }    

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._clossButton.addEventListener('click', () => this.close())
        this._overlay.addEventListener('click', () => {
            if (this._popup.classList.contains('popup_opened')) {
                this.close();
            }
        })}

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        }

    close() {
        this._popup.classList.remove('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
}
