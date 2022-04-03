export default class Section {
    constructor({ renderer }, elementSelector) {
        this._container = document.querySelector(elementSelector);
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element)
    }

    renderItems(data) {
        data.forEach(item => {
            this._renderer(item);
        });
    }
}
