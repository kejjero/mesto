// Класс создания карточки
export default class FormValidator {
    constructor(config, form) {
        this._form = document.querySelector(form);
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
    }

    // Добавление формы
    _setFormsListeners() {
        this._form.addEventListener('input', () => this.setSubmitButtonState());

        const inputs = [...this._form.querySelectorAll(this._inputSelector)];
        inputs.forEach(input => input.addEventListener('input', () => this._handleField(input)));

        this._button = this._form.querySelector(this._submitButtonSelector);

        this.setSubmitButtonState(); 
    }

    //Проверка на волидность формы
    _handleField(input) {
        if (input.validity.valid) {
            this._hideErrors(input);
        } else {
            this._showErrors(input);
        }
    }

    //Показать ошибки
    _showErrors(input) {
        input.classList.add(this._inputErrorClass);
        this._errorElement = this._form.querySelector(`#${input.id}-errors`);
        this._errorElement.textContent = input.validationMessage;

    }

    //Убрать ошибки
    _hideErrors(input) {
        input.classList.remove(this._inputErrorClass);
        this._errorElement = this._form.querySelector(`#${input.id}-errors`);
        this._errorElement.textContent = '';
    }

    // Проверка состояния кнопки сабмит
    setSubmitButtonState() {
        this._button.disabled = !this._form.checkValidity();
        this._button.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    }

    //Влючение валидации формы
    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setFormsListeners();
    }
}
