import { popupAddPlace, popupEditProfile, popupZoomImage, SubmitEditProfile, SubmitAddPlace, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, elementsList, templateElement, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Section from '../scripts/Section.js'
import Card from '../scripts/Сard.js';
import FormValidator from '../scripts/FormValidator.js';
import Popup from '../scripts/Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';


// Экземпляр класса Popup With Image
const newPopupImage = new PopupWithImage(popupZoomImage);


// Экземпляр класса Edit Profile 
const newPopupFormEditProfile = new PopupWithForm(popupEditProfile, {
    callbackSubmitForm: () => {
    console.log('asd')

    } 
});

profileEditButton.addEventListener('click', () => {
    newPopupFormEditProfile.open();
})


 // Экземпляр класса Add Place
// const newPopupFormAddPlace = new PopupWithForm(popupAddPlace)





// Создание секции карточек
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
                const newCard = new Card(
                    item,
                    templateElement,
                    newPopupImage,
                    newPopupFormEditProfile,
                    // newPopupFormAddPlace
                    );
                
                const cardElement = newCard.createCard();
                cardList.addItem(cardElement);
    }
  },
  elementsList
);

cardList.renderItems();


// Экземпляры класса FormValidator
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlace);
const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);


//* Активация валидации двух форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();

