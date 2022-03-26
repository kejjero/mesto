import '../pages/index.css'
import {
    templateSelector, 
    AddPlaceSelector, 
    InputAboutMe,
    InputPerson,
    EditProfileSelector,
    profilePerson,
    profileAboutMe,
    listSelector,
    fromEditProfileSelector,
    ImageSelector,
    formAddPlaceSelector,
    profileEditButton,
    profileAddButton
} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Card from '../scripts/Сard.js';
import Section from '../scripts/Section.js'
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';

// Создание карточки 
const createCard = (item) => {
    const card = new Card(item, templateSelector, newPopupImage);
    const cardElement = card.generateCard();
    return cardElement;
}

// Рендер карточки
const renderCard = (item) => {
const cardElement = createCard(item);
cardList.addItem(cardElement);
}

const cardList = new Section({
    items: initialCards,
    renderer: renderCard
}, 
listSelector
);

// Экземпляр класса добавить карточку 
const newPopupFormAddPlace = new PopupWithForm(AddPlaceSelector, {
    callbackSubmitForm: (data) => {
        const newData = {
            name: data.name,
            link: data.link,
        }
        renderCard(newData);
        newPopupFormAddPlace.close();
    } 
});

// Экземпляр класса редактировать профиль
const newPopupEditProfile = new PopupWithForm(EditProfileSelector, {
    callbackSubmitForm: (data) => {
        userInfo.setUserInfo(data);
        newPopupEditProfile.close();
    }
});

// Экземпляр класса UserInfo 
const userInfo = new UserInfo({
    data: {
        person: profilePerson,
        aboutMe: profileAboutMe
    }
});

// Экземпляр класса открытия карточки
const newPopupImage = new PopupWithImage(ImageSelector);

// Экземпляры класса валидации форм
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlaceSelector);
const editProfileValidation = new FormValidator(formValidationConfig, fromEditProfileSelector);

// Слушатель события кнопка "Редактировать профиль"
profileEditButton.addEventListener('click', () => {
    const data = userInfo.getUserInfo();
    InputPerson.value = data.person;
    InputAboutMe.value = data.aboutMe;
    newPopupEditProfile.open();
    addPlaceValidation.setSubmitButtonState();
});

// Слушатель события кнопка "Добавить карточку"
profileAddButton.addEventListener('click', () => {
    newPopupFormAddPlace.open();
    addPlaceValidation.setSubmitButtonState();
})

// Активация валидации форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();
// Рендер стандартных карточек
cardList.renderItems();
// Активация слушателей попапов
newPopupImage.setEventListeners();
newPopupFormAddPlace.setEventListeners();
newPopupEditProfile.setEventListeners();
