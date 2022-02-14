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
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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

// Создание попапа Zooming Image
const zoomImageActive = (evt) => {
    const elementImage = evt.target.parentElement.querySelector('.element__image');
    const elementDescription = evt.target.parentElement.parentElement.querySelector('.element__description');
    const cleanImage = document.querySelector('.popup__image');
    const cleanSubtitle = document.querySelector('.popup__subtitle');

    cleanImage.src = elementImage.src;
    cleanImage.alt = elementImage.alt;
    cleanSubtitle.textContent = elementDescription.textContent;

    openPopup(popupZoomImage);
}

//Активация лайка
const likeActive = (evt) => {
    evt.target.classList.toggle('element__like_active');
}

//Удаление карточки
const trashActive = (evt) => {
    evt.target.parentElement.parentElement.remove();
}

 // Создание карточки
const createCard = (name, link) => {
    const element = templateElement.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const elementLike = element.querySelector('.element__like');
    const elementTrash = element.querySelector('.element__trash');

    elementTitle.textContent = name;
    elementImage.alt = name;
    elementImage.src = link;

    elementImage.addEventListener('click', zoomImageActive);
    elementLike.addEventListener('click', likeActive);
    elementTrash.addEventListener('click', trashActive);

    return element;
}

// Рендер стандартных карточек
initialCards.forEach(item => {
    elements.append(createCard(item.name, item.link));
});


// Добавление карточки в контейнер
const addCard = (container, createElement) => {
    container.prepend(createElement);
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