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



/* Object.keys(localStorage).forEach(function (key) {
    let store = JSON.parse(localStorage.getItem(key));
    console.log(localStorage.getItem(key));
    const panier = document.getElementById("panierPlein");
    const displayStore = document.createElement("div");
    displayStore.classList.add("cart__container");
    panier.appendChild(displayStore);
    const newH2 = document.createElement("h2");
    newH2.classList.add("teddies__name");
    newH2.innerHTML = store.name;
    displayStore.appendChild(newH2);
    const newImage = document.createElement("img");
    newImage.classList.add("teddies__picture");
    newImage.src = store.image;
    displayStore.appendChild(newImage);
    const newColor = document.createElement("span");
    newColor.classList.add("teddies__color");
    newColor.style.backgroundColor = store.colors;
    displayStore.appendChild(newColor);
    let storePrice = document.createElement("input");
    storePrice.classList.add("number");
    storePrice.setAttribute("disabled", true);
    storePrice.setAttribute("value", store.price / 100 + ',' + store.price % 100 + ' €')
    displayStore.appendChild(storePrice);
}); */