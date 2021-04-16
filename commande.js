const cart = new Cart();

function createCartFromId(productId) {
    productId.forEach(id => {
        console.log(id)
    })
}

function createCart() {
    //Get the container for each card
    const panier = document.getElementById("panier");
    //Loop for each teddies in the api
    cart.products.forEach(product => {
        let creation = displayCart(product);
        panier.appendChild(creation);
    });
}

function displayCart(product) {
    //Creation of the bootstrap row
    let row = document.createElement("div");
    row.classList.add("row");
    //!!!!!!!! Creation of the Card !!!!!!!!//
    //Creation of the div.card
    const cardCmd = document.createElement("div");
    cardCmd.classList.add("card__cmd");
    row.appendChild(cardCmd);
    //!!!!!!!! Creation of the Image !!!!!!!!//
    //Creation of the div container for image
    const divImg = document.createElement("div");
    divImg.classList.add("cmd__image");
    cardCmd.appendChild(divImg);
    //Creation of the image element
    const imageCmd = document.createElement("img");
    imageCmd.src = product.image;
    imageCmd.classList.add("shadow");
    divImg.appendChild(imageCmd);
    //!!!!!!!! Creation of the Name & Color & Price!!!!!!!!//
    //Creation of the div > description__cmd
    const divDescriptionCmd = document.createElement("div");
    divDescriptionCmd.classList.add("description__cmd");
    cardCmd.appendChild(divDescriptionCmd);
    //Creation of p name
    const cmdName = document.createElement("p");
    cmdName.classList.add("name")
    cmdName.innerHTML = product.name;
    divDescriptionCmd.appendChild(cmdName);
    //Creation of span Color
    const cmdColor = document.createElement("span");
    cmdColor.classList.add("cmd__color");
    cmdColor.style.backgroundColor = product.selectedColor;
    divDescriptionCmd.appendChild(cmdColor);
    //Creation of p  price
    const cmdPrice = document.createElement("p");
    cmdPrice.classList.add("price")
    cmdPrice.innerHTML = "Unité : " + product.getPrice();
    divDescriptionCmd.appendChild(cmdPrice);
    //!!!!!!!! Creation of the Quantity & Delete !!!!!!!!//
    //Creation of the div > quantity__delete
    const divQuantityDelete = document.createElement("div");
    divQuantityDelete.classList.add("quantity__delete");
    cardCmd.appendChild(divQuantityDelete);
    //Creation of the div > input & control
    const controleInput = document.createElement("div");
    controleInput.classList.add("controle__input")
    divQuantityDelete.appendChild(controleInput)
    //Creation of the button -
    const buttonMinus = document.createElement("button");
    buttonMinus.addEventListener("click", () => supprQuantity(quantityInput, product, totalPrice))
    buttonMinus.innerHTML = "-";
    controleInput.appendChild(buttonMinus);
    //Create and append quantity input
    const quantityInput = document.createElement("input");
    quantityInput.addEventListener("input", () => changeQuantityOnInput(quantityInput, product, totalPrice))
    quantityInput.addEventListener("keydown", (e) => changeQuantityOnKeypress(e, quantityInput, product, totalPrice))
    quantityInput.value = product.quantity;
    quantityInput.classList.add("quantity");
    controleInput.appendChild(quantityInput);
    //Creation of the button +
    const buttonAdd = document.createElement("button");
    buttonAdd.addEventListener("click", () => addQuantity(quantityInput, product, totalPrice))
    buttonAdd.innerHTML = "+";
    controleInput.appendChild(buttonAdd);
    //Creation of button trash
    const cmdTrash = document.createElement("button");
    cmdTrash.classList.add("delete");
    cmdTrash.addEventListener("click", () => {
        cart.deleteProduct(product);
        finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
        row.remove()
        if (JSON.parse(localStorage.getItem("cart")).length === 0) {
            deleteCartContent()
        }
    })
    divQuantityDelete.appendChild(cmdTrash);
    //Icon trash
    const iconTrash = document.createElement("i");
    iconTrash.classList.add("fas");
    iconTrash.classList.add("fa-trash");
    cmdTrash.appendChild(iconTrash);
    //!!!!!!!! Creation of the Total price !!!!!!!!//
    //Creation of the div > total__cmd
    const divTotalCmd = document.createElement("div");
    divTotalCmd.classList.add("total__cmd");
    cardCmd.appendChild(divTotalCmd);
    //Creation of the p total title
    const totalTitle = document.createElement("p");
    totalTitle.classList.add("total__title")
    divTotalCmd.appendChild(totalTitle);
    //Creation of p total price
    const totalPrice = document.createElement("p");
    totalPrice.innerHTML = "Total : " + product.getTotalPrice();
    totalTitle.appendChild(totalPrice);
    return row;
}


const showEmptyCart = () => {
    document.getElementById("panierVide").style.visibility = 'visible';
    document.getElementById("panierPlein").innerHTML = null;
}

const showCartContent = () => {
    document.getElementById("panierVide").style.visibility = 'hidden';
    document.getElementById("panierPlein").style.visibility = 'visible';
}

const verifyCartContent = () => {
    if (localStorage.key("cart")) {
        showCartContent();
    } else {
        showEmptyCart();
    }
}

function deleteCartContent() {
    localStorage.clear();
    showEmptyCart();
}
const deleteCart = () => {
    document.getElementById("clearStorage").addEventListener('click', deleteCartContent)
}

const displayAllPrice = (product, totalPrice) => {
    totalPrice.innerHTML = "Total : " + product.getTotalPrice();
    finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
}

function displayPrice() {
    finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
}

function supprQuantity(quantityInput, product, totalPrice) {
    quantityInput.value = cart.saveNewQuantity(product, parseInt(quantityInput.value) - 1);
    displayAllPrice(product, totalPrice);
}

function addQuantity(quantityInput, product, totalPrice) {
    quantityInput.value = cart.saveNewQuantity(product, parseInt(quantityInput.value) + 1)
    displayAllPrice(product, totalPrice);
}

function changeQuantityOnInput(quantityInput, product, totalPrice) {
    quantityInput.value = cart.saveNewQuantity(product, quantityInput.value)
    displayAllPrice(product, totalPrice);
}

function changeQuantityOnKeypress(e, quantityInput, product, totalPrice) {
    switch (e.code) {
        case "ArrowDown":
            // Handle "back"
            supprQuantity(quantityInput, product, totalPrice)
            break;
        case "ArrowUp":
            // Handle "forward"
            addQuantity(quantityInput, product, totalPrice)
            break;
    }
}

verifyCartContent();
createCart();
displayPrice();
deleteCart();