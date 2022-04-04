// Создание класса секции
export default class Section {
    constructor( renderCard , elementSelector) {
        this._container = document.querySelector(elementSelector);
        this._renderCard = renderCard;
    }

    // Добавить карточку
    addItem(element) {
        this._container.prepend(element)
    }

    // Обработка всех карточек в массиве
    renderItems(data) {
        data.forEach(item => {
            this._renderCard(item);
        });
    }
}
