function createCartFromId(productId) {
    productId.forEach(id => {
        console.log(id)
    })
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
    //Creation of the bootstrap row
    let row = document.createElement("div");
    row.classList.add("row");
    //Creation of the div.card
    const cardCmd = document.createElement("div");
    cardCmd.classList.add("cardCmd");
    row.appendChild(cardCmd);
    //Creation of the image element
    const imageCmd = document.createElement("img");
    imageCmd.src = product.image;
    imageCmd.classList.add("cmd__image");
    imageCmd.classList.add("shadow");
    cardCmd.appendChild(imageCmd);
    //Creation of the cmd__content
    const contentCmd = document.createElement("div");
    contentCmd.classList.add("cmd__content");
    cardCmd.appendChild(contentCmd);
    //Creation of the Name & Price
    const cmdNP = document.createElement("div");
    cmdNP.classList.add("cmd");
    cmdNP.classList.add("cmd__name__prix");
    contentCmd.appendChild(cmdNP);
    //Creation of p name
    const cmdName = document.createElement("p");
    cmdName.innerHTML = product.name;
    cmdNP.appendChild(cmdName);
    //Creation of p price
    const cmdPrice = document.createElement("p");
    cmdPrice.innerHTML = product.getPrice();
    cmdNP.appendChild(cmdPrice);
    //Creation of the Color & Button
    const cmdCB = document.createElement("div");
    cmdCB.classList.add("cmd");
    cmdCB.classList.add("cmd__color__btn");
    contentCmd.appendChild(cmdCB);
    //Creation of span name
    const cmdColor = document.createElement("span");
    cmdColor.classList.add("cmd__color");
    cmdColor.style.backgroundColor = product.selectedColor;
    cmdCB.appendChild(cmdColor);
    //Creation of quantity number
    const cmdQuantity = document.createElement("span");
    cmdQuantity.textContent = product.quantity;
    cmdCB.appendChild(cmdQuantity);
    //Creation of button price
    const cmdTrash = document.createElement("button");
    cmdTrash.classList.add("btn");
    cmdTrash.classList.add("trash");
    cmdTrash.addEventListener("click", (e) => {
        cart.deleteProduct(product, row);
    })
    cmdCB.appendChild(cmdTrash);
    //Icon trash
    const iconTrash = document.createElement("i");
    iconTrash.classList.add("fas");
    iconTrash.classList.add("fa-trash");
    cmdTrash.appendChild(iconTrash);
    //Creation of the p description
    const cmdDescription = document.createElement("p");
    cmdDescription.innerHTML = product.description;
    contentCmd.appendChild(cmdDescription);
    return row;

}

function showEmptyCart() {
    document.getElementById("panierVide").style.visibility = 'visible';
    document.getElementById("panierPlein").innerHTML = null;
}

function showCartContent() {
    document.getElementById("panierVide").style.visibility = 'hidden';
    document.getElementById("panierPlein").style.visibility = 'visible';
}

function deleteCartContent() {
    localStorage.clear();
    showEmptyCart();
}

if (localStorage.key("cart")) {
    showCartContent();
} else {
    showEmptyCart();
}

document.getElementById("clearStorage").addEventListener('click', () => {
    deleteCartContent();
})

function displayPrice() {
    finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
}

getStorage();
displayPrice();