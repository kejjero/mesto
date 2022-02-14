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
        hideErrors(form, input,config)
    } else {
        showErrors(form, input,config)
    }
}

const showErrors = (form, input, config) => {
    input.classList.add(config.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-errors`);
    checkingInputErrors(input, errorElement);
}

const checkingInputErrors = (input, error) => {
    if (input.type === 'text' && input.value.length === 1){
        error.textContent = `Минимальное количество символов: 2. Длина текста сейчас: ${input.value.length} символ.`
    }
    else if(input.type === 'url' && !input.validity.valid) {
        error.textContent = 'Введите адрес сайта.'
    }
    else {
        error.textContent = 'Вы пропустили это поле.'
    }
}

const hideErrors = (form, input, config) => {
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


