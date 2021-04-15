const cart = new Cart();

//Get the ID of the product on the window location for the api
function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

//Display the description of the teddie
function displayContent(product) {
    teddiesName.innerHTML = product.name;
    imgTeddies.src = product.image;
    descriptionTeddies.innerHTML = product.description;
    priceTeddies.innerHTML = product.getPrice();
}

//Function for display all the teddie colors 
function displayColors(product) {
    const colorsTeddies = document.getElementById("colors__teddies");
    product.colors.forEach(color => {
        if (color === "Pale brown") {
            color = "#977155";
        } else if (color === "Dark brown") {
            color = "#654321";
        }
        const newColor = document.createElement("input");
        newColor.setAttribute("type", "radio");
        newColor.setAttribute("name", "inlineRadioOptions");
        newColor.setAttribute("value", color);
        newColor.classList.add("color__dispo");
        newColor.style.backgroundColor = color;
        colorsTeddies.appendChild(newColor);
    })
}

//Event click add product
function addProduct(product) {
    selectProductColor(product);
    document.getElementById("storagePanier").addEventListener('click', () => addProductEvent(product))
}

//Select the color
function selectProductColor(product) {
    if (product.colors.length === 1) {
        product.selectedColor = product.colors[0];
    } else {
        document.getElementById('colors__teddies').addEventListener('change', (e) => {
            product.selectedColor = e.target.value;
            document.getElementById("test__couleur").style.visibility = "hidden";
        })
    }
}

//call the method form Cart.js for add the product to the storage 
function addProductEvent(product) {
    if (!product.selectedColor) {
        document.getElementById("test__couleur").style.visibility = "visible";
        return
    }
    cart.addProduct(product);
    document.getElementById("red__dot").style.visibility = "visible";
}

redDotCart();
getTeddy();
