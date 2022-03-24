// Класс создания карточки
export default class Card {
    constructor(data, cardSelector, dataSet, openImagePopup) {
        this._data = data;
        this._cardTitle = data.name;
        this._cardLink = data.link;
        this._cardSelector = cardSelector;
        this._dataSet = dataSet;
        this._openImagePopup = openImagePopup;
    }

     // Получение шаблона карточки
    _getTemplateCard() {
        this.cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return this.cardElement;
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

    // Обработчики событий
    _setEventListeners() {
        this._cardLike.addEventListener('click', () => {this._handleLikeButton()});
        this._cardTrash.addEventListener('click', () => {this._handleTrashButton()});
        this._cardImage.addEventListener('click', () => {this._dataSet(this._data)});
    }

    // Создание карточки
    generateCard() {
        this._cardElement = this._getTemplateCard();
        this._cardName = this._cardElement.querySelector('.element__title');
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardLike = this._cardElement.querySelector('.element__like');
        this._cardTrash =  this._cardElement.querySelector('.element__trash');
    
        this._setEventListeners();
        this._setData();

        return this._cardElement;
    }
}
