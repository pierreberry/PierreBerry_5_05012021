function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

fetch(`http://localhost:3000/api/teddies/` + urlId("id"))
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        teddiesName.innerHTML = data.name;
        imgTeddies.src = data.imageUrl;
        descriptionTeddies.innerHTML = data.description;
        priceTeddies.innerHTML = data.price + " €";
        let colorsTeddies = document.getElementById("colors__teddies");
        data.colors.forEach(color => {
            console.log(color);
            if (color === "Pale brown") {
                color = "#977155";
            } else if (color === "Dark brown") {
                color = "#654321";
            }
            const newColor = document.createElement("li");
            colorsTeddies.appendChild(newColor);
            const newSpan = document.createElement("span");
            newSpan.classList.add("color__dispo");
            newColor.appendChild(newSpan);
            newSpan.style.backgroundColor = color;
        })
    });
