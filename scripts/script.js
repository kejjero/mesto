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
        link: 'https://sun9-41.userapi.com/impg/Tx5s-vl6goCjNNzf2BxhBPx9YgwI9qKI-Dn8Tg/VtC4MCJOCOg.jpg?size=539x1080&quality=96&sign=9f0328edd6b8f04666db84b1d42a79da&type=album'
    },
    {
        name: 'Челябинская область',
        link: 'https://sun9-44.userapi.com/impf/IcXOq1v21k5HzitK1dQI70FXZPa2FLKHoIA2zw/J5pcCnWYKKc.jpg?size=960x720&quality=96&sign=f181294863f7c4d792ddcdec3f24b585&type=album'
    },
    {
        name: 'Иваново',
        link: 'https://sun9-10.userapi.com/impf/c623628/v623628036/84df/RbqbThpGWWs.jpg?size=768x1024&quality=96&sign=f7b292a483fc797a0405a8b04bd3d6db&type=album'
    },
    {
        name: 'Камчатка',
        link: 'https://sun9-75.userapi.com/impf/c627822/v627822355/1ba8c/y09lg7HiRsA.jpg?size=555x300&quality=96&sign=649804acc83ee33d38032e15d79c0b73&type=album'
    },
    {
        name: 'Холмогорский район',
        link: 'https://sun9-49.userapi.com/impg/QCHCXbds29HGKmvGrlSHiaRGEJhupOm3sPKgpw/3YvYJcCKWKE.jpg?size=1440x1920&quality=96&sign=c72ddbf74743d9f7b8a0a81fefb4e306&type=album'
    },
    {
        name: 'Байкал',
        link: 'https://sun9-60.userapi.com/impf/c850620/v850620254/133909/TCfWfPDpcXg.jpg?size=719x960&quality=96&sign=9f2513ebcf99657a655d7329f243c57e&type=album'
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
