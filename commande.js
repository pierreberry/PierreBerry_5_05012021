function showEmptyCart() {
    document.getElementById("panierVide").style.visibility = 'visible';
    document.getElementById("panierPlein").style.visibility = 'hidden';
}

function showCartContent() {
    document.getElementById("panierVide").style.visibility = 'hidden';
    document.getElementById("panierPlein").style.visibility = 'visible';
}

if (localStorage.length > 0) {
    showCartContent();
} else {
    showEmptyCart();
}

document.getElementById("clearStorage").addEventListener('click', (e) => {
    localStorage.clear();
    showEmptyCart();
})

function getStorage() {

    productStorage = [];
    totalPrice = [];
    JSON.parse(localStorage.getItem('cart')).forEach(data => {
        let product = new Product(data.color, data.id, data.name, data.price, data.image, data.description);
        productStorage.push(product);
        totalPrice.push(data.price);
    })
    createCart(productStorage);
    additionPrice(totalPrice);

};

function additionPrice(totalPrice) {
    sum = 0;
    totalPrice.forEach(dataPrice => {
        sum += dataPrice;
    })
    const total = sum / 100 + ',' + sum % 100 + ' €'
    console.log(total);
}

function createCart(productStorage) {
    //Get the container for each card
    const panier = document.getElementById("panier");
    //Loop for each teddies in the api
    productStorage.forEach(product => {
        let creation = displayCart(product);
        panier.appendChild(creation);
    });
}


function displayCart(product) {
    //Creation of the bootstrap col
    const col = document.createElement("div");
    col.classList.add("col");
    //Creation of the div.card
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    col.appendChild(newCard);
    //Creation of the link on the image a.lien__image
    const cardLink = document.createElement("a");
    cardLink.classList.add("lien__image");
    newCard.appendChild(cardLink);
    cardLink.href = `produits.html?id=` +
        product.id;
    //Creation of the img element img.card-img-top.shadow-sm
    const newImg = document.createElement("img");
    newImg.classList.add("card-img-top");
    newImg.classList.add("shadow-sm");
    cardLink.appendChild(newImg);
    newImg.src = product.image;
    //Creation of the the div.card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    newCard.appendChild(cardBody);
    //Creation of the teddies price element h5.card-title
    let storePrice = document.createElement("input");
    storePrice.classList.add("number");
    storePrice.setAttribute("disabled", true);
    storePrice.setAttribute("value", product.getPrice());
    cardBody.appendChild(storePrice);


    //Creation of the teddies name element p.card-text with link
    const newName = document.createElement("p");
    newName.classList.add("card-text");
    cardBody.appendChild(newName);
    // Name link on the products
    newName.innerHTML =
        `<a href='produits.html?id=` +
        product.id +
        `'>` +
        product.name +
        `</a>`;

    const newColor = document.createElement("span");
    newColor.classList.add("teddies__color");
    newColor.style.backgroundColor = product.colors;
    cardBody.appendChild(newColor);

    return col;
    /*     const displayStore = document.createElement("div");
        displayStore.classList.add("cart__container");
        panier.appendChild(displayStore);
        const newH2 = document.createElement("h2");
        newH2.classList.add("teddies__name");
        newH2.innerHTML = product.name;
        displayStore.appendChild(newH2);
        const newImage = document.createElement("img");
        newImage.classList.add("teddies__picture");
        newImage.src = product.image;
        displayStore.appendChild(newImage);
        const newColor = document.createElement("span");
        newColor.classList.add("teddies__color");
        newColor.style.backgroundColor = product.colors;
        displayStore.appendChild(newColor);
        let storePrice = document.createElement("input");
        storePrice.classList.add("number");
        storePrice.setAttribute("disabled", true);
        storePrice.setAttribute("value", product.price / 100 + ',' + product.price % 100 + ' €')
        displayStore.appendChild(storePrice); */
}

getStorage();