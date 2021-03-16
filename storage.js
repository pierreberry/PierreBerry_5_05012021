function getStorage() {

    productStorage = [];
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
    })
    createCart(productStorage);
};
