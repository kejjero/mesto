const popupAddPlaceButton = document.querySelector('.popup_type_add-place');
const popupEditProfileButton = document.querySelector('.popup_type_edit-profile');
const closeButtonEditProfile = document.querySelector('.popup__close-button_edit-profile');
const closeButtonAddPlace = document.querySelector('.popup__close-button_add-place');
const popupZoomImage = document.querySelector('.popup_type_image');
const closeButtonZoomImage = document.querySelector('.popup__close-button_zoom-image');
const formEditProfile = document.querySelector('.popup__form_edit-profile');
const formAddPlace = document.querySelector('.popup__form_add-place')
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('#element-template').content;

let personInput = document.querySelector('.popup__input_person');
let aboutMeInput = document.querySelector('.popup__input_about-me');
let aboutMeProfile = document.querySelector('.profile__about-me');
let personProfile = document.querySelector('.profile__person');
let namePlaceInput = document.querySelector('.popup__input_name-place');
let linkPlaceInput = document.querySelector('.popup__input_link-place');
let initialCards = [
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

// функции закрытия попапов
const closePopupEditProfile = () => {
    popupEditProfileButton.classList.remove('popup_opened')
}
const closePopupAddPlace = () => {
    popupAddPlaceButton.classList.remove('popup_opened')
}
const closePopupZoomImage = () => {
    popupZoomImage.classList.remove('popup_opened')
}

// Первоначальная агрузка данных Редактировать профиль
getFormEditProfile = () => {
    aboutMeProfile.textContent = aboutMeInput.value;
    personProfile.textContent = personInput.value;
}
getFormEditProfile();

// Создание попапа Zooming Image
const zoomImageActive = (evt) => {
    let elementImage = evt.target.parentElement.querySelector('.element__image');
    let elementDescription = evt.target.parentElement.parentElement.querySelector('.element__description');
    let cleanImage = document.querySelector('.popup__image');
    let cleanSubtitle = document.querySelector('.popup__subtitle')

    cleanImage.src = elementImage.src;
    cleanSubtitle.textContent = elementDescription.textContent;
    popupZoomImage.classList.add('popup_opened');
}

//Активация лайка
const likeActive = (evt) => {
    evt.target.classList.toggle('element__like_active');
}

//Удаление карточки
const trashActive = (evt) => {
    evt.target.parentElement.parentElement.remove();
}


// Темплейт форма с загрузкой карточек из массива
const loadingElements = () => {
    for (let i = 0; i < initialCards.length; i++) {
        const element = templateElement.querySelector('.element').cloneNode(true)
        const elementTitle = element.querySelector('.element__title');
        const elementImage = element.querySelector('.element__image');
        const elementLike = element.querySelector('.element__like')
        const elementTrash = element.querySelector('.element__trash')

        elementTitle.textContent = initialCards[i].name;
        elementImage.src = initialCards[i].link;
        elementImage.addEventListener('click', zoomImageActive);
        elementLike.addEventListener('click', likeActive);
        elementTrash.addEventListener('click', trashActive);

        elements.append(element)
    }
}
loadingElements();

// Создание попапа Добавить место
createPopupAddButton = () => {
    popupAddPlaceButton.classList.add('popup_opened');
}

// Создание попапа Редактировать профиль
const createPopupEditProfile = () => {
    popupEditProfileButton.classList.add('popup_opened');
}

// Создание темплейт элемента
const createNewElement = (namePlaceInput, linkPlaceInput) => {
    const element = templateElement.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const elementLike = element.querySelector('.element__like')
    const elementTrash = element.querySelector('.element__trash')

    elementTitle.textContent = namePlaceInput.value;
    elementImage.src = linkPlaceInput.value;

    elementImage.addEventListener('click', zoomImageActive);
    elementLike.addEventListener('click', likeActive);
    elementTrash.addEventListener('click', trashActive);

    elements.prepend(element);
}

//Отправка формы Редактировать профиль
const handlerFormEditButton = (evt) => {
    evt.preventDefault();
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopupEditProfile();
}

//Отправка формы Добавить место
const handlerFormAddPlace = (evt) => {
    evt.preventDefault();
    createNewElement(namePlaceInput, linkPlaceInput);
    closePopupAddPlace();
    namePlaceInput.value = '';
    linkPlaceInput.value = '';
}

//Закрытие попапов
closeButtonZoomImage.addEventListener('click', closePopupZoomImage)
closeButtonEditProfile.addEventListener('click', closePopupEditProfile)
closeButtonAddPlace.addEventListener('click', closePopupAddPlace)
//Создание попапов
addButton.addEventListener('click', createPopupAddButton)
editButton.addEventListener('click', createPopupEditProfile);
//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);
