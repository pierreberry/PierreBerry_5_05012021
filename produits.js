function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
if (localStorage.length > 0) {
    const dot = document.getElementById("red__dot");
    dot.style.visibility = "visible";
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


function storage(product) {

    let colorChoosen = "";

    if (product.colors.length === 1) {
        colorChoosen = product.colors[0];
    } else {
        document.getElementById('colors__teddies').addEventListener('change', (e) => {
            colorChoosen = e.target.value;
            document.getElementById("test__couleur").style.visibility = "hidden";
        })
    }

    let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

    document.getElementById("storagePanier").addEventListener('click', () => {
        if (colorChoosen === "") {
            document.getElementById("test__couleur").style.visibility = "visible";
        } else {
            cartArray.push({
                name: product.name,
                description: product.description,
                price: product.price,
                id: product.id,
                image: product.image,
                color: colorChoosen
            });
            document.getElementById("red__dot").style.visibility = "visible";
            console.log(cartArray);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
    })
}

getTeddy();