// Class for all the Teddies
class Product {
    constructor(colors, id, name, price, image, description, selectedColor = null, quantity = 1) {
        this.colors = colors;
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.selectedColor = selectedColor;
        this.quantity = quantity;
    }
    // method for Format the price
    getPrice() {
        return this.price / 100 + ',' + (this.price % 100).toString().padEnd(2, 0) + ' €';
    }
}
