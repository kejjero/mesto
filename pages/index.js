import { templateSelector, AddPlaceSelector, EditProfileSelector, listSelector, fromEditProfileSelector,  ImageSelector, formAddPlaceSelector, popupEditProfile, inputNamePlace,inputLinkPlace, popupZoomImage, SubmitEditProfile, SubmitAddPlace, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Card from '../scripts/Сard.js';
import Section from '../scripts/Section.js'
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';

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
// const newPopupEditProfile = new PopupWithForm(EditProfileSelector, {

// });

// Обработчики событий кнопки редактировать профиль и добавить карточку 
profileAddButton.addEventListener('click', () => {
    newPopupFormAddPlace.open();
    addPlaceValidation.setSubmitButtonState();
})

// profileEditButton.addEventListener('click', () => {
//     newPopupEditProfile.open();
//     newPopupEditProfile.setSubmitButtonState();
// })



// Экземпляры классов 
const newPopupImage = new PopupWithImage(ImageSelector);
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlaceSelector);
const editProfileValidation = new FormValidator(formValidationConfig, fromEditProfileSelector);


//* Активация валидации двух форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();
cardList.renderItems();
newPopupImage.setEventListeners();
newPopupFormAddPlace.setEventListeners();
