if (localStorage.length > 0) {
    document.getElementById("panierVide").style.visibility = 'hidden';
    document.getElementById("panierPlein").style.visibility = 'visible';
} else {
    document.getElementById("panierVide").style.visibility = 'visible';
    document.getElementById("panierPlein").style.visibility = 'hidden';
}

document.getElementById("clearStorage").addEventListener('click', (e) => {
    localStorage.clear();
    document.getElementById("panierPlein").style.visibility = 'hidden';
    document.getElementById("panierVide").style.visibility = 'visible';
    document.getElementById("red__dot").style.visibility = "hidden";
})

teddiesName.innerHTML = localStorage.getItem('teddiesName');
teddiesPrice.innerHTML = localStorage.getItem('teddiesPrice');
teddiesPicture.src = localStorage.getItem('teddiesPicture');
teddiesColor.style.backgroundColor = localStorage.getItem('teddiesColor');