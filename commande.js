const instance = new Cart();

function createCart(productStorage) {
    const productId = [];
    //Get the container for each card
    const panier = document.getElementById("panier");
    //Loop for each teddies in the api
    productStorage.forEach(product => {
        productId.push(product.id)
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
    //Creation of button price
    const cmdTrash = document.createElement("button");
    cmdTrash.classList.add("btn");
    cmdTrash.classList.add("trash");
    cmdTrash.addEventListener("click", (e) => {
        instance.deleteProduct(product, row);
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

if (localStorage.length > 0) {
    instance.showCartContent();
} else {
    instance.showEmptyCart();
}

document.getElementById("clearStorage").addEventListener('click', () => {
    instance.deleteCartContent();
})

function displayPrice() {
    finalPrice.innerHTML = `Prix total : ` + instance.displayTotalPrice();
}

getStorage();

displayPrice();