import { popupAddPlace, popupEditProfile, popupZoomImage, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, elementsList, templateElement, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Section from '../scripts/Section.js'
import Card from '../scripts/Сard.js';
import FormValidator from '../scripts/FormValidator.js';
import Popup from '../scripts/Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';





// // Закрытие попапа по клику оверлей
// const setOverlayListener = (evt) => {
//     const popupOpened = document.querySelector('.popup_opened');
//     if (evt.target === popupOpened) {
//         closePopup(popupOpened);
//     }
// }
// // Закрытие попапа через Esc
// const setEscListener = (evt) => {
//     const popupOpened = document.querySelector('.popup_opened');
//     if(evt.key === 'Escape'){
//         closePopup(popupOpened);
//     }
// }

// // Закрытие попапа
// const closePopup = (popup) => {
//    popup.classList.remove('popup_opened');
//    popup.removeEventListener('mousedown', setOverlayListener);
//    document.removeEventListener('keydown', setEscListener);
// }

// // Открытие попапа
// export const openPopup = (popup) => {
//     popup.classList.add('popup_opened');
//     popup.addEventListener('mousedown', setOverlayListener);
//     document.addEventListener('keydown', setEscListener);
// }

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
    const newData = {
        name: namePlaceInput.value,
        link: linkPlaceInput.value,
    }
    // defaultCardList.renderer()    Написать отправку 
    closePopup(popupAddPlace);
    formAddPlace.reset();
    addPlaceValidation.setSubmitButtonState();
}

//Закрытие попапов
closeButtonEditProfile.addEventListener('click', function () {closePopup(popupEditProfile)});
closeButtonAddPlace.addEventListener('click', function () {closePopup(popupAddPlace)});
closeButtonZoomImage.addEventListener('click', function () {closePopup(popupZoomImage)});
//Создание попапов

//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);


// Экземпляр класса PopupWithImage
const openImagePopup = new PopupWithImage(popupZoomImage);

const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {
                const newCard = new Card(item, templateElement, openImagePopup);
                const cardElement = newCard.createCard();
                defaultCardList.addItem(cardElement);
    }
  },
  elementsList
);

defaultCardList.renderItems();


// Экземпляры класса FormValidator
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlace);
const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);


//* Активация валидации
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();

