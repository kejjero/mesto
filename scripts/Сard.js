import { popupZoomImage } from '../utils/variables.js'
import { openPopup } from './index.js'

// Класс создания карточки
export default class Card {
    constructor(data, cardSelector) {
        this._cardTitle = data.name;
        this._cardLink = data.link;
        this._cardSelector = cardSelector;
        this._cardElement = this._getTemplateCard();
        this._cardName = this._cardElement.querySelector('.element__title');
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardLike = this._cardElement.querySelector('.element__like');
        this._cardTrash =  this._cardElement.querySelector('.element__trash');
        this._popup = popupZoomImage;
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupName = this._popup.querySelector('.popup__subtitle');
    }

     // Получение шаблона карточки
    _getTemplateCard() {
        return this._cardSelector.querySelector('.element').cloneNode(true);
    }

    // Заполнение данными карточки 
    _setData() {
        this._cardName.textContent = this._cardTitle;
        this._cardImage.alt = this._cardTitle;
        this._cardImage.src = this._cardLink;
    }

    // Лайк карточки
    _handleLikeButton() {
        this._cardLike.classList.toggle('element__like_active');
    }

    // Удаление карточки
    _handleTrashButton() {
        this._cardElement.remove();
    }

    // Открытие карточки 
    _handleZoomImage() {
        this._popupName.textContent = this._cardName.textContent;
        this._popupImage.src = this._cardImage.src;
        this._popupImage.alt = this._cardImage.alt;
        openPopup(this._popup);
    }

    // Обработчики событий
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {this._handleZoomImage()});
        this._cardLike.addEventListener('click', () => {this._handleLikeButton()});
        this._cardTrash.addEventListener('click', () => {this._handleTrashButton()});
    }

    // Создание карточки
    createCard() {
        this._setEventListeners();
        this._setData();

        return this._cardElement;
    }
}
