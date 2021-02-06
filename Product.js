class Product {
    constructor(colors, id, name, price, image, description) {
        this.colors = colors;
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    getPrice() {
        return this.price / 100 + ',' + this.price % 100 + ' €';
    }
}