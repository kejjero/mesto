export default class Section {
    constructor({ data, renderer }, elementSelector) {
        this._renderedItems = data;
        this._container = elementSelector;
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element)
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    } 
}


