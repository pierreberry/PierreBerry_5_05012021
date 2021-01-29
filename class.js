function main() {
    let a = 1;
    let b = 2;
    let sum = addition(a, b)
    console.log(sum)
}

function addition(a, b) {
    let sum = a + b
    return sum
}

main();

class Product {
    constructor(name, price, description, colors) {
        this.name = name;
        this.price = price;
        // ..
    }

    getPrice() {
        return this.price / 100 + ',' + this.price % 100

    }


    getName() {
        return this.name.toLowerCase.toTitlecase
    }
}


fetch("/products")
    .then((response) => {
        res.json()
    })
    .then((teddies) => {

        productList = []

        teddies.forEach(data => {
            let product = new Product(data.colors, data._id, data.name, data.price, data.imageUrl, data.description)
            productList.push(product)
        })

        // [Product, Product, Product]

        productList.forEach(product => {
            // add product to DOM
            product.getPrice()
        })
    }) 