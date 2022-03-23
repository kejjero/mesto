import { popupAddPlace, popupEditProfile, popupZoomImage, closeButtonEditProfile, closeButtonAddPlace, closeButtonZoomImage, formEditProfile, formAddPlace, profileEditButton, profileAddButton, elementsList, templateElement, personInput, aboutMeInput, aboutMeProfile, personProfile, namePlaceInput, linkPlaceInput} from '../utils/variables.js';
import { initialCards } from '../utils/initialCards.js';
import { formValidationConfig } from '../utils/config.js';
import Section from '../scripts/Section.js'
import Card from '../scripts/Сard.js';
import FormValidator from '../scripts/FormValidator.js';
import Popup from '../scripts/Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';



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


//Отправка форм
formAddPlace.addEventListener('submit', handlerFormAddPlace);
formEditProfile.addEventListener('submit', handlerFormEditButton);


// Экземпляр класса PopupWithImage
const newPopupImage = new PopupWithImage(popupZoomImage);
// Экземпляр класса PopupWithImage





const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {
                const newCard = new Card(item, templateElement, newPopupImage);
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


//* Активация валидации двух форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();

