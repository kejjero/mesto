const popup = document.querySelectorAll('.popup')
const popupEditButton = document.querySelector('#popup-edit-button')
const popupAddButton = document.querySelector('#popup-add-button')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button')
const submitEditButton = document.querySelector('#submit-edit-button');
const submitAddButton = document.querySelector('#submit-add-button');

const addButton = document.querySelector('.profile__add-button')

let personInput = document.querySelector('#person')
let aboutMeInput = document.querySelector('#about-me')
let aboutMeProfile = document.querySelector('.profile__about-me')
let personProfile = document.querySelector('.profile__person')

// Создание popup Редактировать профиль
const createPopupEditButton = () => {
    popupEditButton.classList.add('popup_opend');
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

//Создание popup Добавить место
const createPopupAddButton = () => {
    popupAddButton.classList.add('popup_opend');
}

//Отправка формы Добавить место
const handlerFormAddButton = (evt) => {
    evt.preventDefault();
}


//Закрыть попап
const closePopup = () => {
    popup.classList.remove('popup_opend');
}


addButton.addEventListener('click', createPopupAddButton)
editButton.addEventListener('click', createPopupEditButton);
closeButton.addEventListener('click', closePopup);
submitEditButton.addEventListener('submit', handlerFormEditButton);
submitAddButton.addEventListener('submit', handlerFormEditButton);