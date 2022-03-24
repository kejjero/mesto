import { templateSelector, AddPlaceSelector, listSelector, fromEditProfileSelector,  ImageSelector, formAddPlaceSelector, popupEditProfile, inputNamePlace,inputLinkPlace, popupZoomImage, SubmitEditProfile, SubmitAddPlace, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Section from '../scripts/Section.js'
import Card from '../scripts/Сard.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';


// Создание карточки 
const createCard = (item) => {
        const card = new Card(item, templateSelector, (item) => handleDataSet(item));
        const cardElement = card.createCard();
        return cardElement;
}

// Заполнение данными карточки 
const handleDataSet = (item) => {
    const data = {
        name: item.name,
        link: item.link
    }
    newPopupImage.open(data);
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

// Экземпляр класса Popup With Image
const newPopupImage = new PopupWithImage(ImageSelector);


// Экземпляр класса добавить карточку 
const newPopupFormAddPlace = new PopupWithForm(AddPlaceSelector, {
    callbackSubmitForm: (data) => {
        const itemsArray = {
            name: data.elementName,
            link: data.elementLink,
        }
        renderCard(itemsArray);
        newPopupFormAddPlace.close();
    } 
});

profileAddButton.addEventListener('click', () => {
    newPopupFormAddPlace.open();
    addPlaceValidation.setSubmitButtonState();
    // cardFormValidator.resetError();
})







// Экземпляры класса FormValidator
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlaceSelector);
const editProfileValidation = new FormValidator(formValidationConfig, fromEditProfileSelector);


//* Активация валидации двух форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();
cardList.renderItems();
