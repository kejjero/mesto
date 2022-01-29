const popup = document.querySelector('.popup');

const popupAddPlaceButton = document.querySelector('.popup_type_add-place')
const popupEditProfileButton = document.querySelector('.popup_type_edit-profile')


const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button')
const submitEditButton = document.querySelector('#edit');
const elements = document.querySelector('.elements')
const templateElement = document.querySelector('#element-template').content

let personInput = document.querySelector('#person')
let aboutMeInput = document.querySelector('#about-me')
let aboutMeProfile = document.querySelector('.profile__about-me')
let personProfile = document.querySelector('.profile__person')
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


//Активация лайка
const likeActive = (evt) => {
    evt.target.classList.toggle('element__like_active');
}

//Удаление карточки
const trashActive = (evt) => {
    evt.target.parentElement.parentElement.remove();
}


// Темплейт форма
const loadingElements = () => {
    for (let i = 0; i < initialCards.length; i++) {
        const element = templateElement.querySelector('.element').cloneNode(true)
        const elementTitle = element.querySelector('.element__title');
        const elementImage = element.querySelector('.element__image');
        const elementLike = element.querySelector('.element__like')
        const elementTrash = element.querySelector('.element__trash')

        elementTitle.textContent = initialCards[i].name;
        elementImage.src = initialCards[i].link;
        elementLike.addEventListener('click', likeActive);
        elementTrash.addEventListener('click', trashActive);

        elements.append(element)
    }
}
loadingElements();


// Создание popup добавить место

createPopupAddButton = () => {
    popupAddPlaceButton.classList.add('popup_opened');
}


// Создание popup Редактировать профиль
const createPopupEditButton = () => {
    popupEditProfileButton.classList.add('popup_opened');
    personInput.value = personProfile.textContent;
    aboutMeInput.value= aboutMeProfile.textContent;
}

//Отправка формы Редактировать профиль
const handlerFormEditButton = (evt) => {
    evt.preventDefault();
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup();
}

//Закрыть попап
const closePopup = () => {
    // Придумать как закрыть 2 попапа!!!!!
}




// Добавление карточки сделать через копию темплейта и присвоения тайтла и картинки !!!


addButton.addEventListener('click', createPopupAddButton)
editButton.addEventListener('click', createPopupEditButton);
closeButton.addEventListener('click', closePopup);
// submitEditButton.addEventListener('submit', handlerFormEditButton);