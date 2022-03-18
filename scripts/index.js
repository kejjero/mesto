import { popupAddPlace, popupEditProfile, popupZoomImage, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, elements, templateElement, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js';

// Закрытие попапа по клику оверлей
const setOverlayListener = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.target === popupOpened) {
        closePopup(popupOpened);
    }
}
// Закрытие попапа через Esc
const setEscListener = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.key === 'Escape'){
        closePopup(popupOpened);
    }
}

// Заблокировать сабмит
function disableButton(popup, config) {
    const button = popup.querySelector(config.submitButtonSelector);
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', 'true');
}

// Закрытие попапа
const closePopup = (popup) => {
   popup.classList.remove('popup_opened');
   popup.removeEventListener('mousedown', setOverlayListener);
   document.removeEventListener('keydown', setEscListener);
}

// Открытие попапа
export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', setOverlayListener);
    document.addEventListener('keydown', setEscListener);
}

// Первоначальная загрузка данных Редактировать профиль
const getFormEditProfile = () => {
    aboutMeProfile.textContent = aboutMeInput.value;
    personProfile.textContent = personInput.value;
}

//Отправка формы Редактировать профиль
const handlerFormEditButton = (evt) => {
    evt.preventDefault();
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup(popupEditProfile);
}

//Отправка формы Добавить место
const handlerFormAddPlace = (evt) => {
    evt.preventDefault();
    const newDataCards = {
        name: namePlaceInput.value,
        link: linkPlaceInput.value,
    }
    createCards(newDataCards, templateElement);
    closePopup(popupAddPlace);
    document.getElementById('form-add').reset();
    disableButton(formAddPlace, formValidationConfig);
}

//Закрытие попапов
closeButtonEditProfile.addEventListener('click', function () {closePopup(popupEditProfile)});
closeButtonAddPlace.addEventListener('click', function () {closePopup(popupAddPlace)});
closeButtonZoomImage.addEventListener('click', function () {closePopup(popupZoomImage)});
//Создание попапов
profileAddButton.addEventListener('click', function () {openPopup(popupAddPlace)});
profileEditButton.addEventListener('click', function () {
    getFormEditProfile();
    openPopup(popupEditProfile);
});

//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);

// Создание стандартных карточек
const createCards = (data, templateElement) => {
    const newCard = new Card(data, templateElement);
    elements.prepend(newCard.createCard());
}

// Отправка данных для создания стандартных карточек
const getDataDefaultCards = (data) => {
    data.forEach(item => {
        createCards(item, templateElement);
    });
};
getDataDefaultCards(initialCards);

// Валидация форм
const addValidation = () => {
    const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlace);
    const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
    editProfileValidation.enableValidation();
    addPlaceValidation.enableValidation();
}
addValidation();
