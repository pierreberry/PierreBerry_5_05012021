class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    getStorage(productStorage) {
        productStorage = [];
        this.cart.forEach(data => {
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
            productStorage.push(product);
        })
        createCart(productStorage);
    }

    displayTotalPrice() {
        let sum = 0;
        this.cart.forEach(item => {
            sum += item.quantity * item.price;
        });
        return sum / 100 + ',' + (sum % 100).toString().padEnd(2, 0) + ' €';
    }

    saveNewQuantity(product, selectList) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id === product.id && this.cart[i].selectedColor === product.selectedColor) {
                product.quantity = selectList.value;
                this.cart[i].quantity = selectList.value;
            }
        }
        this.saveCart(this.cart);
    }

    //Button delete
    deleteProduct(product) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id === product.id && this.cart[i].selectedColor === product.selectedColor) {
                this.cart.splice(i, 1);
            }
        }
        this.saveCart(this.cart);
    }

    saveCart(cart) {
        cart = JSON.stringify(cart);
        localStorage.setItem('cart', cart);
        if (JSON.parse(cart).length === 0) {
            localStorage.clear();
            showEmptyCart();
        }
    }

    retrieveProductIds() {
        let productIds = [];
        for (let i = 0; i < this.cart.length; i++) {
            productIds.push(this.cart[i].id);
        }
        return productIds;
    }

}

const cart = new Cart();