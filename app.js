fetch("http://localhost:3000/api/teddies")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //Get the container for each card
        let container = document.getElementById("cards");
        //Loop for each data in the api
        data.forEach(function (data) {
            //Creation of the bootstrap col
            const col = document.createElement("div");
            col.classList.add("col");
            container.appendChild(col);
            //Creation of the div.card
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            col.appendChild(newCard);
            //Creation of the link on the image a.lien__image
            const cardLink = document.createElement("a");
            cardLink.classList.add("lien__image");
            newCard.appendChild(cardLink);
            cardLink.href = `produits.html?id=` +
                data._id;
            //Creation of the img element img.card-img-top.shadow-sm
            const newImg = document.createElement("img");
            newImg.classList.add("card-img-top");
            newImg.classList.add("shadow-sm");
            cardLink.appendChild(newImg);
            newImg.src = data.imageUrl;
            //Creation of the the div.card-body
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            newCard.appendChild(cardBody);
            //Creation of the data price element h5.card-title
            const newPrice = document.createElement("h5");
            newPrice.classList.add("card-title");
            cardBody.appendChild(newPrice);
            newPrice.innerHTML = data.price + " €";
            //Creation of the data name element p.card-text with link
            const newName = document.createElement("p");
            newName.classList.add("card-text");
            cardBody.appendChild(newName);
            // Name link on the products
            newName.innerHTML =
                `<a href='produits.html?id=` +
                data._id +
                `'> Ours en peluche ` +
                data.name +
                `</a>`;
            //Creation of the button Voir plus a.btn
            const newButton = document.createElement("a");
            newButton.classList.add("btn");
            cardBody.appendChild(newButton);
            newButton.href = `produits.html?id=` +
                data._id;
            newButton.innerHTML = "Voir plus";
        });
    });


if (localStorage.length > 0) {
    const dot = document.getElementById("red__dot");
    dot.style.visibility = "visible";
    console.log(localStorage);
}