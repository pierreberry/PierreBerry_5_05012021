class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    totalPricePerProduct(product) {
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id && cart[i].selectedColor === product.selectedColor) {
                const total = cart[i].quantity * cart[i].price;
                return total / 100 + ',' + (total % 100).toString().padEnd(2, 0) + ' €';
            }
        }
    }

    displayTotalPrice() {
        let total = this.cart.reduce((prev, cur) => prev + cur.price, 0)
        return total / 100 + ',' + (total % 100).toString().padEnd(2, 0) + ' €';
    }

    deleteProduct(product, row) {
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id && cart[i].selectedColor === product.selectedColor) {
                let total = cart.reduce((prev, cur) => prev + cur.price, 0) - cart[i].price;
                let sum = total / 100 + ',' + (total % 100).toString().padEnd(2, 0) + ' €';
                cart.splice(i, 1);
                row.remove();
                finalPrice.innerHTML = `Prix total : ` + sum;
            }
        }
        cart = JSON.stringify(cart);
        localStorage.setItem('cart', cart);
        if (JSON.parse(cart).length === 0) {
            localStorage.clear();
            showEmptyCart();
        }
    }

    retrieveProducts() {
        let products = [];
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            products.push(cart[i].id);
        }
        return products;
    }


}

const cart = new Cart();