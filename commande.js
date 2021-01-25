console.log(localStorage);

Object.keys(localStorage).forEach((key) => {
    console.log(localStorage.getItem(key));
});


teddiesName.innerHTML = localStorage.getItem('teddiesName');
teddiesPrice.innerHTML = localStorage.getItem('teddiesPrice');
teddiesPicture.src = localStorage.getItem('teddiesPicture');