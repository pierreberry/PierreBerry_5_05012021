class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    displayTotalPrice() {
        let sum = 0;
        this.cart.forEach(item => {
            sum += item.quantity * item.price;
        });
        return sum / 100 + ',' + (sum % 100).toString().padEnd(2, 0) + ' €';
    }

    //Button delete
    deleteProduct(product) {
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id && cart[i].selectedColor === product.selectedColor) {
                cart.splice(i, 1);
            }
        }
        finalPrice.innerHTML = `Prix total : ` + this.displayTotalPrice();
        this.saveCart(cart);
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