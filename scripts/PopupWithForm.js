import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { callbackSubmitForm }) {
        super(popupSelector);
        this._popup = popupSelector;
        this._callbackSubmitForm = callbackSubmitForm; 
    }

    _getInputValues() {

    }


    close(){
        super.close();
    }


    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', () => this.close())


    }
}

// //Отправка формы Редактировать профиль
// const handlerFormEditButton = (evt) => {
//     evt.preventDefault();
//     personProfile.textContent = personInput.value;
//     aboutMeProfile.textContent = aboutMeInput.value;
//     closePopup(popupEditProfile);
// }

// //Отправка формы Добавить место
// const handlerFormAddPlace = (evt) => {
//     evt.preventDefault();
//     const newData = {
//         name: namePlaceInput.value,
//         link: linkPlaceInput.value,
//     }
//     // defaultCardList.renderer()    Написать отправку 
//     closePopup(popupAddPlace);
//     formAddPlace.reset();
//     addPlaceValidation.setSubmitButtonState();
// }


// //Отправка форм
// formAddPlace.addEventListener('submit', handlerFormAddPlace);
// formEditProfile.addEventListener('submit', handlerFormEditButton);