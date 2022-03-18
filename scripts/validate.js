const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
    }

    //Влючение валидации формы
    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setFormsListeners();
    }

    // Добавление форм
    _setFormsListeners() {
        this._form.addEventListener('input', () => this._setSubmitButtonState)

        const inputs = [...this._form.querySelectorAll(this._inputSelector)]
        inputs.forEach(input => input.addEventListener('input', () => this._handleField(input)))

        this._setSubmitButtonState(); // Сразу проверяем форму на валидность
    }

    //Проверка на волидность формы
    _handleField(input) {
        console.log(input.validity.valid)
        if (input.validity.valid) {
            this._hideErrors(input);
            this._setSubmitButtonState();
        } else {
            this._showErrors(input);
            this._setSubmitButtonState();
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
        this._errorElement.textContent = ''
    }

    // Проверка состояния кнопки сабмит
    _setSubmitButtonState() {
        this._button = this._form.querySelector(this._submitButtonSelector);
        this._button.disabled = !this._form.checkValidity();
        this._button.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity())
    }
}

const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlace);
const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);

editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();

