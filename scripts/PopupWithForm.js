import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { callbackSubmitForm }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        console.log(this._popup)
        this._form = this._popup.querySelector('.popup__form')
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
        this._callbackSubmitForm = callbackSubmitForm; 
    }

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


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());

        })
    }
}
