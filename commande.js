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
    //Creation of the option quantity
    //Create array of options to be added
    const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    //Create and append select list
    const selectList = document.createElement("select");
    selectList.addEventListener("change", () => {
        //product.quantity = selectList.value;
        cart.saveNewQuantity(product, selectList)
        totalPrice.innerHTML = "Total : " + product.getTotalPrice();
        finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
    })
    selectList.classList.add("quantity");
    divQuantityDelete.appendChild(selectList);
    //Create and append the options
    for (let i = 0; i < array.length; i++) {
        const option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        if (array[i] == product.quantity) {
            option.setAttribute("selected", true);
        }
        selectList.appendChild(option);
    }
    //Creation of button trash
    const cmdTrash = document.createElement("button");
    cmdTrash.classList.add("delete");
    cmdTrash.addEventListener("click", (e) => {
        cart.deleteProduct(product);
        finalPrice.innerHTML = `Prix total : ` + cart.displayTotalPrice();
        row.remove()
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

cart.getStorage();
displayPrice();