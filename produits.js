function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function displayContent(product) {
    teddiesName.innerHTML = product.name;
    imgTeddies.src = product.image;
    descriptionTeddies.innerHTML = product.description;
    priceTeddies.innerHTML = product.getPrice();
}

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

function addProductToStorage(product) {

    let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

    selectProductColor(product)

    document.getElementById("storagePanier").addEventListener('click', () => {
        addEvent(product, cartArray);
    })
}

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


function addEvent(product, cartArray) {
    if (!product.selectedColor) {
        document.getElementById("test__couleur").style.visibility = "visible";
        return
    }
    let hasUpdated = false

    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id === product.id && cartArray[i].selectedColor === product.selectedColor) {
            cartArray[i].quantity += 1
            hasUpdated = true;
        }
    }

    if (!hasUpdated) {
        cartArray.push({
            name: product.name,
            description: product.description,
            price: product.price,
            id: product.id,
            image: product.image,
            selectedColor: product.selectedColor,
            colors: product.colors,
            quantity: product.quantity
        });
    }

    document.getElementById("red__dot").style.visibility = "visible";
    localStorage.setItem('cart', JSON.stringify(cartArray));
}
redDotCart();
getTeddy();
