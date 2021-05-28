class Cart {
    constructor() {
        this.products = [];
        (JSON.parse(localStorage.getItem("cart")) || []).forEach(data => {
            let product = new Product(
                data.colors,
                data.id,
                data.name,
                data.price,
                data.image,
                data.description,
                data.selectedColor,
                data.quantity
            );
            this.products.push(product);
        });
    }

    //Method for add the product to the storage
    addProduct(product) {
        let hasUpdated = false
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id && this.products[i].selectedColor === product.selectedColor) {
                if (this.products[i].quantity >= 10) {
                    return
                };
                this.products[i].quantity += 1
                hasUpdated = true;
            }
        }

        if (!hasUpdated) {
            this.products.push({
                name: product.name,
                description: product.description,
                price: product.price,
                id: product.id,
                image: product.image,
                selectedColor: product.selectedColor,
                colors: product.colors,
                quantity: product.quantity
            });
        }
        this.saveCart();
    }

    //Method for display the total price on the cart
    displayTotalPrice() {
        let sum = 0;
        this.products.forEach(item => {
            sum += item.quantity * item.price;
        });
        return sum / 100 + ',' + (sum % 100).toString().padEnd(2, 0) + ' €';
    }

    //Method who save the new quantity 
    saveNewQuantity(product, newValue) {
        if (newValue < 0 || newValue > 10) {
            return product.quantity;
        }
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id && this.products[i].selectedColor === product.selectedColor) {
                this.products[i].quantity = newValue;
                this.saveCart();
                return newValue;
            }
        }
    }

    //Button delete
    deleteProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id && this.products[i].selectedColor === product.selectedColor) {
                this.products.splice(i, 1);
            }
        }
        this.saveCart();
    }

    //Save cart on the storage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.products));
    }

    //Method for retrieve each ID for the confirm command
    retrieveProductIds() {
        let productIds = [];
        for (let i = 0; i < this.products.length; i++) {
            productIds.push(this.products[i].id);
        }
        return productIds;
    }
}
