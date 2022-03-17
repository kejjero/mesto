import { openPopup } from './index.js'

// Класс создания карточки
export default class Card {
    constructor(data, cardSelector) {
        this._cardTitle = data.name;
        this._cardLink = data.link;
        this._cardSelector = cardSelector;
    }

     // Получение шаблона карточки
    _getTemplateCard() {
        const cardElement = this._cardSelector.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    // Заполнение данными карточки 
    _setDataСard() {
        this._cardName.textContent = this._cardTitle;
        this._cardImage.alt = this._cardTitle;
        this._cardImage.src = this._cardLink;
    }

    // Лайк карточки
    _likeActive() {
        this.classList.toggle('element__like_active')
    }

    // Удаление карточки
    _trashActive() {
        this.parentElement.parentElement.remove();
    }

    // Открытие карточки 
    _zoomImageActive() {
        this._cardImage = this.parentElement.querySelector('.element__image');
        this._cardSubtitle = this.parentElement.parentElement.querySelector('.element__description');
        this._popupImage = document.querySelector('.popup__image');
        this._popupName = document.querySelector('.popup__subtitle');


        this._popupName.textContent = this._cardSubtitle.textContent;
        this._popupImage.src = this._cardImage.src;
        this._popupImage.alt = this._cardImage.alt;
        openPopup(popupZoomImage);
    }

    // Обработчики событий
    _setEventListeners() {
        this._cardImage.addEventListener('click', this._zoomImageActive);
        this._cardLike.addEventListener('click', this._likeActive);
        this._cardTrash.addEventListener('click', this._trashActive);
    }

    // Создание карточки
    createCard() {
        this._cardElement = this._getTemplateCard();
        this._cardName = this._cardElement.querySelector('.element__title');
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardLike = this._cardElement.querySelector('.element__like');
        this._cardTrash =  this._cardElement.querySelector('.element__trash');
    
        this._setEventListeners();
        this._setDataСard();

        return this._cardElement;
    }
}
