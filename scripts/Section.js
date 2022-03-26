export default class Section {
    constructor({ items, renderer }, elementSelector) {
        this._items = items;
        this._container = document.querySelector(elementSelector);
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element)
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }
    
}
