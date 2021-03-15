class Cart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem("cart"));
    }

    deleteProduct(product, row) {
        let cart = this.cart;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].number === product.number) {
                let total = (cart[i].price * cart.length) - cart[i].price;
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
            instance.showEmptyCart();
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
}
