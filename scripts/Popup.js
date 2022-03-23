export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
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
        this._popup.addEventListener('click', () => this.close())
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._popup.addEventListener('mousedown', () => this.setEventListeners());
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('mousedown', () => this.setEventListeners());
        document.addEventListener('keydown', this._handleEscClose);
    }
}
