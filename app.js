fetch("http://localhost:3000/api/teddies")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let container = document.getElementById("card_container");
        data.forEach(function (data) {
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            container.appendChild(newCard);
            const newImg = document.createElement("img");
            newCard.appendChild(newImg);
            newImg.src = data.imageUrl;
            const newTitle = document.createElement("div");
            newCard.appendChild(newTitle);
            newTitle.innerHTML =
                `<a href='produits.html?id=` +
                data._id +
                `' class="name">` +
                data.name +
                `</a>`;
            const newPrice = document.createElement("div");
            newCard.appendChild(newPrice);
            newPrice.innerHTML = `<p class="prix">` + data.price + `€</p>`;
        });
    });
