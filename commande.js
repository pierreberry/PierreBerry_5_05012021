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

teddiesName.innerHTML = localStorage.getItem('teddiesName');
teddiesPrice.innerHTML = localStorage.getItem('teddiesPrice');
teddiesPicture.src = localStorage.getItem('teddiesPicture');
teddiesColor.style.backgroundColor = localStorage.getItem('teddiesColor');