import { Card } from './card.js';

const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupZoomImage = document.querySelector('.popup_type_image');
const closeButtonEditProfile = document.querySelector('.popup__close-button_edit-profile');
const closeButtonAddPlace = document.querySelector('.popup__close-button_add-place');
const closeButtonZoomImage = document.querySelector('.popup__close-button_zoom-image');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const formAddPlace = document.querySelector('.popup__form_add-place');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('#element-template').content;
const personInput = document.querySelector('.popup__input_person');
const aboutMeInput = document.querySelector('.popup__input_about-me');
const aboutMeProfile = document.querySelector('.profile__about-me');
const personProfile = document.querySelector('.profile__person');
const namePlaceInput = document.querySelector('.popup__input_name-place');
const linkPlaceInput = document.querySelector('.popup__input_link-place');
const initialCards = [
    {
        name: 'Сан-Франциско',
        link: 'https://images.unsplash.com/photo-1645233411244-915c469ac93a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Гавана',
        link: 'https://images.unsplash.com/photo-1646202559943-b20d9e245c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
        name: 'Будапешт',
        link: 'https://images.unsplash.com/photo-1645267858566-d496208193c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
    },
    {
        name: 'Стокгольм',
        link: 'https://images.unsplash.com/photo-1644574739831-d19ded59cae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Киото',
        link: 'https://images.unsplash.com/photo-1561503972-839d0c56de17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Париж',
        link: 'https://images.unsplash.com/photo-1638369321326-6af6b7a5cdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
]

// Закрытие попапа по клику оверлей
const setOverlayListener = (evt) => {
    const popupOpened = document.querySelector('.popup_opened')
    if (evt.target === popupOpened) {
        closePopup(popupOpened);
    }
}
// Закрытие попапа через Esc
const setEscListener = (evt) => {
    const popupOpened = document.querySelector('.popup_opened')
    if(evt.key === 'Escape'){
        closePopup(popupOpened);
    }
}

// Заблокировать сабмит
function disableButton(popup, config) {
    const button = popup.querySelector(config.submitButtonSelector);
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', 'true')
}

// Закрытие попапа
const closePopup = (popup) => {
   popup.classList.remove('popup_opened');
   popup.removeEventListener('mousedown', setOverlayListener);
   document.removeEventListener('keydown', setEscListener)
}

// Открытие попапа
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    popup.addEventListener('mousedown', setOverlayListener);
    document.addEventListener('keydown', setEscListener)
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
    addCard(elements, createCard(namePlaceInput.value, linkPlaceInput.value));
    closePopup(popupAddPlace);
    document.getElementById('form-add').reset();
    disableButton(formAddPlace, formValidationConfig)
}

//Закрытие попапов
closeButtonEditProfile.addEventListener('click', function () {closePopup(popupEditProfile)});
closeButtonAddPlace.addEventListener('click', function () {closePopup(popupAddPlace)});
closeButtonZoomImage.addEventListener('click', function () {closePopup(popupZoomImage)});
//Создание попапов
profileAddButton.addEventListener('click', function () {
    openPopup(popupAddPlace)

});
profileEditButton.addEventListener('click', function () {
    getFormEditProfile()
    openPopup(popupEditProfile)
});

//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);

const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

// Создание первоначальных карточек
const createCards = (data, templateElement) => {
    const newCard = new Card(data, templateElement)
    elements.append(newCard.createCard());
}

// Отправка данных для создания стандартных карточек
const getDataCards = (data) => {
    data.forEach(item => {
        createCards(item, templateElement)
    })
}

getDataCards(initialCards)



// Создание карточки
// const createNewCard = (evt) => {
//     evt.preventDefault();
//     createCards(popupAddPlace.value, popupZoomImage.value)
//     elements.prepend(createCards(popupAddPlace.value, popupZoomImage.value));
//     closePopup();
// }

// Загрузка первоначальных карточек
