import Popup from "./Popup.js";

// Класс обработки формы
export default class PopupWithForm extends Popup {
    constructor(popupSelector, { callbackSubmitForm }) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm; 
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
    }

    // Получение полей инпутов
    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
        this._inputValues[input.name] = input.value;
    })
        return this._inputValues;
    }

    close(){
        super.close();
        this._form.reset();
    }

    //Обработка полей по нажатию сабмит
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());
        })
    }
}
