class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    /*displayTotalPrice() {
        let cart = this.cart;
        let total = 0;
        cart.forEach(cartPrice => {
            total += cartPrice.price;
        });
        let totalPrice = total / 100 + ',' + (total % 100).toString().padEnd(2, 0) + ' €';
        return totalPrice;
    } */

    displayTotalPrice() {
        let total = this.cart.reduce((prev, cur) => prev + cur.price, 0)
        return total / 100 + ',' + (total % 100).toString().padEnd(2, 0) + ' €';
    }

    deleteProduct(product, row) {
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].number === product.number) {
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
            this.showEmptyCart();
        }
    }

    showEmptyCart() {
        document.getElementById("panierVide").style.visibility = 'visible';
        document.getElementById("panierPlein").innerHTML = null;
    }

    showCartContent() {
        document.getElementById("panierVide").style.visibility = 'hidden';
        document.getElementById("panierPlein").style.visibility = 'visible';
    }

    deleteCartContent() {
        localStorage.clear();
        this.showEmptyCart();
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
