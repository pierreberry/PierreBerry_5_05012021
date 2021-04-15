// Fetch for all the Teddies
// in app.js for index.html
function getTeddies() {
    fetch("http://localhost:3000/api/teddies")
        .then((response) => {
            return response.json();
        })
        .then((teddies) => {

            productList = [];

            teddies.forEach(data => {
                let product = new Product(
                    data.colors,
                    data._id,
                    data.name,
                    data.price,
                    data.imageUrl,
                    data.description
                );
                productList.push(product);
            })

            createCards(productList);
        });
}

// Fetch the description for the Teddie selected 
// in produits.js for produits.html
function getTeddy() {
    fetch(`http://localhost:3000/api/teddies/` + urlId("id"))
        .then((response) => {
            return response.json();
        })
        .then((teddiesDescription) => {

            contentTeddies = [];
            let product = new Product(
                teddiesDescription.colors,
                teddiesDescription._id,
                teddiesDescription.name,
                teddiesDescription.price,
                teddiesDescription.imageUrl,
                teddiesDescription.description
            )
            contentTeddies.push(product);

            displayContent(product);
            displayColors(product);
            addProduct(product);
        });
}
