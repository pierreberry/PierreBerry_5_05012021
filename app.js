fetch("http://localhost:3000/api/teddies")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let container = document.getElementById("cards");
        data.forEach(function (data) {
            const col = document.createElement("div");
            col.classList.add("col");
            container.appendChild(col);
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            col.appendChild(newCard);
            const newImg = document.createElement("img");
            newImg.classList.add("card-img-top");
            newImg.classList.add("shadow-sm");
            newCard.appendChild(newImg);
            newImg.src = data.imageUrl;
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            newCard.appendChild(cardBody);
            const newPrice = document.createElement("h5");
            newPrice.classList.add("card-title");
            cardBody.appendChild(newPrice);
            newPrice.innerHTML = data.price + " €";
            const newDescription = document.createElement("p");
            newDescription.classList.add("card-text");
            cardBody.appendChild(newDescription);
            newDescription.innerHTML =
                `<a href='produits.html?id=` +
                data._id +
                `'> Ours en peluche ` +
                data.name +
                `</a>`;
            const newButton = document.createElement("a");
            newButton.classList.add("btn");
            newButton.classList.add("btn-primary");
            cardBody.appendChild(newButton);
            newButton.href = `produits.html?id=` +
                data._id;
            newButton.innerHTML = "Voir plus";
        });
    });

console.log(localStorage);

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(localStorage.getItem(key));
}