// Класс создания карточки
export default class Card {
    constructor(api, data, cardSelector, popupImage, userId, popupCardDelete) {
        this._api = api;
        this._data = data;
        this._userId = userId;
        this._cardId = data._id;
        this._ownerCardId = data.owner._id;
        this._likesArray = data.likes;
        this._cardTitle = data.name;
        this._cardLink = data.link;
        this._cardSelector = cardSelector;
        this._popupImage = popupImage;
        this._popupCardDelete = popupCardDelete;
    }

    // Удаление карточки
    _handleTrashButton() {
        this._popupCardDelete.open()
        this._popupCardDelete.confirmHandler(() => {
            // Промис для удаления карточки
            this._api.deleteCard(this._cardId)
                .then(() => {
                    this._popupCardDelete.close()
                    this._cardElement.remove();
                    this._cardElement = null;
                })
                .catch((err) => {
                console.log(err)
                })
        })
    }

    // Открытие карточки
    _handleCardClick () {
        this._popupImage.open(this._data);
    }

    // Обработчики событий
    _setEventListeners() {
        this._cardLike.addEventListener('click', () => this._handleLikeButton());
        this._cardTrash.addEventListener('click', () => this._handleTrashButton());
        this._cardImage.addEventListener('click', () => this._handleCardClick());
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

    // Проверяем загруженные карточки, есть ли лайк пользователя в массиве или нет
    _isLiked() {
        this._likesArray.forEach((personIdLike) => {
            if(personIdLike._id === this._userId){
                this._cardLike.classList.add('element__like_active');
            } else {
                this._cardLike.classList.remove('element__like_active');
            }
        })
    }

    // Лайк карточки
    _handleLikeButton() {
        this._containsLike = this._cardLike.classList.contains('element__like_active');
        if (!this._containsLike) {
            // промис добавления лайка
            this._api.addLike(this._cardId)
                .then((res) => {
                this._cardLike.classList.add('element__like_active');
                this._countLikes(res.likes)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            // промис удаления лайка
            this._api.deleteLike(this._cardId)
                .then((res) => {
                this._cardLike.classList.remove('element__like_active');
                this._countLikes(res.likes)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // Подсчет лайков карточки
    _countLikes(arrayLikes) {
        this._likeValue.textContent = arrayLikes.length;
    }

    // Проверка на владельца карточки по айди
    _isOwned () {
        if (this._userId === this._ownerCardId) {
            this._cardTrash.classList.add('element__trash_active')
        }
    }

    // Создание карточки
    generateCard() {
        this._cardElement = this._getTemplateCard();
        this._cardName = this._cardElement.querySelector('.element__title');
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardLike = this._cardElement.querySelector('.element__like');
        this._cardTrash =  this._cardElement.querySelector('.element__trash');
        this._likeValue = this._cardElement.querySelector('.element__like-value');

        this._isOwned () // проверка на владельца карточки
        this._isLiked() // проверка уже лайкнувшей карточки и отображение самого лайка
        this._countLikes(this._likesArray) // первоначальный подсчет лайков
        this._setEventListeners(); // добавление обработчиков событий на все кнопки
        this._setData(); // добавление данных для карточки из апи

        return this._cardElement;
    }
}
