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


Object.keys(localStorage).forEach(function (key) {
    let store = JSON.parse(localStorage.getItem(key));
    console.log(localStorage.getItem(key));
    const panier = document.getElementById("panierPlein");
    const newH2 = document.createElement("h2");
    newH2.classList.add("teddiesName");
    newH2.innerHTML = store.name;
    panier.appendChild(newH2);
    const newColor = document.createElement("span");
    newColor.classList.add("teddies__color");
    newColor.style.backgroundColor = store.colors;
    panier.appendChild(newColor);
    const newImage = document.createElement("img");
    newImage.classList.add("teddies__picture");
    newImage.src = store.image;
    panier.appendChild(newImage);
    let storePrice = document.createElement("input");
    storePrice.classList.add("number");
    storePrice.setAttribute("disabled", true);
    storePrice.setAttribute("value", store.price / 100 + ',' + store.price % 100 + ' €')
    panier.appendChild(storePrice);
});