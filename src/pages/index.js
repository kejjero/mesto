import './index.css'
import {
    addPlaceSelector,
    formAddPlaceSelector,
    fromEditProfileSelector,
    formEditAvatarSelector,
    imageSelector,
    listSelector,
    addPlaceButton,
    templateSelector,
    editProfileSelector,
    editProfileButton,
    inputPerson,
    inputAboutMe,
    profilePerson,
    profileAboutMe,
    deleteCardSelector,
    editAvatarSelector,
    editAvatarButton,
    profileAvatar,
} from '../utils/variables.js';
import { formValidationConfig } from '../utils/config.js';
import Card from '../components/Сard.js';
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { api } from '../components/Api.js';
let userId;

// Получение данных профиля и карточек
Promise.all([api.getProfile(), api.getCards()])
    .then(([res, data]) => {
        userInfo.setUserInfo(res.name, res.about, res.avatar);
        userId = res._id;
        data.reverse();
        cardList.renderItems(data);
    })
    .catch((err) => {
        console.log(err)
    })

// Создание карточки
const createCard = (item) => {
    const card = new Card(
        api,
        item,
        templateSelector,
        newPopupImage,
        userId,
        newPopupCardDelete
    );
    return card.generateCard();
}

// Рендер карточки
const renderCard = (item) => {
const cardElement = createCard(item);
cardList.addItem(cardElement);
}

// Экземпляр класса Section
const cardList = new Section(renderCard, listSelector);

// Экземпляр класса добавить карточку
const newPopupFormAddPlace = new PopupWithForm(addPlaceSelector, {
        callbackSubmitForm: (data) => {
            renderLoading(true);
            const card = {
            name: data.name,
            link: data.link,
        }
        // промис для отправки данных новой карточки
        api.sendCard(card.name, card.link)
            .then((newCard) => {
            renderCard(newCard);
            newPopupFormAddPlace.close()
        })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
            renderLoading(false);
        })
   }
})

// Экземпляр класса редактировать профиль
const newPopupEditProfile = new PopupWithForm(editProfileSelector, {
    callbackSubmitForm: (data) => {
        renderLoading(true)
        // промис для отправки данных профиля
        api.editProfile(data.person, data.aboutMe)
            .then((newData) => {
            userInfo.setUserInfo(newData.name, newData.about, newData.avatar);
            newPopupEditProfile.close();
        })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(false)
            })
    }
});

// Экземпляр класса редактировать аватар
const newPopupEditAvatar = new PopupWithForm(editAvatarSelector, {
    callbackSubmitForm: (data) => {
        renderLoading(true)
        // промис для отправки аватара
        api.editAvatar(data.avatar)
            .then((res) => {
                userInfo.setUserInfo(res.name, res.about, res.avatar);
            newPopupEditAvatar.close()
        })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                renderLoading(false)
            })
    }
})

// Экземпляр класса UserInfo
const userInfo = new UserInfo({
        data: {
            person: profilePerson,
            aboutMe: profileAboutMe,
            avatar: profileAvatar,
        }
    }
);

// Экземпляр класса открытия карточки
const newPopupImage = new PopupWithImage(imageSelector);

// Экземпляр класса попапа удаления карточки
const newPopupCardDelete = new PopupWithConfirm(deleteCardSelector);

// Экземпляры класса валидации форм
const addPlaceValidation = new FormValidator(formValidationConfig, formAddPlaceSelector);
const editProfileValidation = new FormValidator(formValidationConfig, fromEditProfileSelector);
const editAvatarValidation = new FormValidator(formValidationConfig, formEditAvatarSelector);

// Слушатель события кнопка "Редактировать аватар"
editAvatarButton.addEventListener('click', () => {
    newPopupEditAvatar.open();
    editAvatarValidation.setSubmitButtonState();
})

// Слушатель события кнопка "Редактировать профиль"
editProfileButton.addEventListener('click', () => {
    const data = userInfo.getUserInfo();
    inputPerson.value = data.person;
    inputAboutMe.value = data.aboutMe;
    newPopupEditProfile.open();
    editProfileValidation.setSubmitButtonState();
});

// Слушатель события кнопка "Добавить карточку"
addPlaceButton.addEventListener('click', () => {
    newPopupFormAddPlace.open();
    addPlaceValidation.setSubmitButtonState();
})

// Активация валидации форм
editProfileValidation.enableValidation();
addPlaceValidation.enableValidation();
editAvatarValidation.enableValidation();

// Активация слушателей попапов
newPopupImage.setEventListeners();
newPopupEditAvatar.setEventListeners()
newPopupFormAddPlace.setEventListeners();
newPopupEditProfile.setEventListeners();
newPopupCardDelete.setEventListeners();

// Визуальный эффект обработки запроса
const renderLoading = (isLoading) => {
    const buttons = Array.from(document.querySelectorAll('.popup__button_save'))
    buttons.forEach((button) => {
        if (isLoading) {
            button.value = "Сохранение..."
        } else {
            button.value = 'Сохранить'
        }
    })
}

