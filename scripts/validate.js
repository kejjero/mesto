const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const enableValidation = data => {
    const forms = [...document.querySelectorAll(data.formSelector)]
    forms.forEach(form => addFormsListener(form, data))

}

const addFormsListener = (form, config) => {
    form.addEventListener('submit', handleSubmit)
    form.addEventListener('input', () => setSubmitButtonState(form, config))

    const inputs = [...form.querySelectorAll(config.inputSelector)]
    inputs.forEach(input => input.addEventListener('input', () => handleField(form,input, config)))

    setSubmitButtonState(form, config);
}


const handleSubmit = evt => {
    evt.preventDefault()
}

const handleField = (form, input, config) => {
    if (input.validity.valid) {
        hideError(form, input,config)
    } else {
        showError(form, input,config)
    }
}

const showError = (form, input, config) => {
    input.classList.add(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-errors`);

    errorElement.textContent = 'Вы пропустили это поле.'
}

const hideError = (form, input, config) => {
    input.classList.remove(config.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-errors`);
    errorElement.textContent = ''
}


const setSubmitButtonState = (form, config) => {
    const button = form.querySelector(config.submitButtonSelector)

    button.disabled = !form.checkValidity();
    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}









enableValidation(formValidationConfig);


