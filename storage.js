function getStorage() {

    productStorage = [];
    sum = 0;
    JSON.parse(localStorage.getItem('cart')).forEach(data => {
        let product = new Product(
            data.colors,
            data.id,
            data.name,
            data.price,
            data.image,
            data.description,
            data.selectedColor,
            data.number
        );
        productStorage.push(product);
        sum += data.price;
    })
    createCart(productStorage);
    additionPrice(sum);
};
