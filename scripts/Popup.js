export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._clossOverlay = this._popup.querySelector('.popup__overlay') 
        this._clossButton = this._popup.querySelector('.popup__close-button')
    }    
    _handleEscClose(evt) {
        if(evt.key === 'Escape'){
            this.close(this._popupOpened);
        }
    }

    setEventListeners() {
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._popup.addEventListener('mousedown', () => this._setEventListeners());
        document.addEventListener('keydown', () => this._handleEscClose());
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('mousedown', () => this._setEventListeners());
        document.removeEventListener('keydown', () => this._handleEscClose());
    }
}
