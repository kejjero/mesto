import { popupAddPlace, popupEditProfile, popupZoomImage, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, elements, templateElement, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js';

const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlace);
const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);

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
    const newDataForCard = {
        name: namePlaceInput.value,
        link: linkPlaceInput.value,
    }
    renderCards(newDataForCard, templateElement);
    closePopup(popupAddPlace);
    formAddPlace.reset();
    addPlaceValidation.setSubmitButtonState();
}

//Закрытие попапов
closeButtonEditProfile.addEventListener('click', function () {closePopup(popupEditProfile)});
closeButtonAddPlace.addEventListener('click', function () {closePopup(popupAddPlace)});
closeButtonZoomImage.addEventListener('click', function () {closePopup(popupZoomImage)});
//Создание попапов
profileAddButton.addEventListener('click', function () {openPopup(popupAddPlace)});
profileEditButton.addEventListener('click', function () {getFormEditProfile(); openPopup(popupEditProfile)});

//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);


// Создание карточек
const createCards = (data, templateElement) => {
    const newCard = new Card(data, templateElement);
    return newCard.createCard();
}

// Рендер карточек
const renderCards = (data, templateElement) => { 
    elements.prepend(createCards(data, templateElement)); 
}  

// Отправка данных для создания стандартных карточек
const getDataDefaultCards = (data) => {
    data.forEach(item => {
        renderCards(item, templateElement);
    });
};
getDataDefaultCards(initialCards);

// Валидация форм
const addValidation = () => {
    editProfileValidation.enableValidation();
    addPlaceValidation.enableValidation();
}
addValidation();
