const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button')
const popupForm = document.querySelector('.popup__form')
const popupContainer = document.querySelector('.popup__container')
const addButton = document.querySelector('.profile__add-button')
const placeContainElements = document.querySelector('.elements')
const placeElement = document.querySelectorAll('.element')
const like = document.querySelectorAll('.element__like');

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


// Закрыть popup
closeButton.addEventListener('click', evt => {
    evt.preventDefault();
    popup.classList.remove('popup_opend');
})

// Создать popup editButton
editButton.addEventListener('click', evt => {
    evt.preventDefault();


    popup.classList.add('popup_opend');
});

// Создать popup addButton
addButton.addEventListener('click', evt => {
    evt.preventDefault();
    popup.classList.add('popup_opend');
});


const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');


const getCardsElement = (item) => {
    const element = elementTemplate.cloneNode(true);
    const elementTitle = element.querySelector('.element__title')
    const elementImage = element.querySelector('.element__image')
    for (let i = 0; i < initialCards.length; i++) {
        elementTitle[i] = initialCards[i].name
        elementImage[i] = initialCards[i].link
    }
    return element;
}
getCardsElement();

const renderCards = () => {


}


// Функция лайков
const handleLikeButton = (evt) => {
    evt.target.classList.toggle('element__like_active');
}


const loadInitialCards = () => {
    const cards = document.querySelectorAll('.element')
    const linkCards = document.querySelectorAll('.element__image')
    const nameCards = document.querySelectorAll('.element__title')
    for (let i = 0; i < cards.length; i++) {
        nameCards[i].textContent = initialCards[i].name;
        linkCards[i].src = initialCards[i].link
    }
}
loadInitialCards();