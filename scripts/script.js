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

// Закрытие попапа
const closePopup = (popup) => {
   popup.classList.remove('popup_opened')
}

// Открытие попапа
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

// Первоначальная загрузка данных Редактировать профиль
// Я поместил срабатывание этой функции в html разметку,
// так как на нижеуказанные оборобтчики событий нельзя закрепить 2 функции разом
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
    cleanImage.alt = elementImage.alt
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
    const element = templateElement.querySelector('.element').cloneNode(true)
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const elementLike = element.querySelector('.element__like')
    const elementTrash = element.querySelector('.element__trash')

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
    container.prepend(createElement)
}

//Отправка формы Редактировать профиль
const handlerFormEditButton = (evt) => {
    evt.preventDefault();
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup(popupEditProfileButton);
}

//Отправка формы Добавить место
const handlerFormAddPlace = (evt) => {
    evt.preventDefault();
    addCard(elements, createCard(namePlaceInput.value, linkPlaceInput.value));
    closePopup(popupAddPlaceButton);
    document.getElementById('form-add').reset();
}

//Закрытие попапов
closeButtonEditProfile.addEventListener('click', function () {closePopup(popupEditProfileButton)});
closeButtonAddPlace.addEventListener('click', function () {closePopup(popupAddPlaceButton)});
closeButtonZoomImage.addEventListener('click', function () {closePopup(popupZoomImage)});
//Создание попапов
addButton.addEventListener('click', function () {openPopup(popupAddPlaceButton)});
editButton.addEventListener('click', function () {openPopup(popupEditProfileButton)});
//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);
