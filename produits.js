if (localStorage.length > 0) {
    const dot = document.getElementById("red__dot");
    dot.style.visibility = "visible";
}

function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

fetch(`http://localhost:3000/api/teddies/` + urlId("id"))
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        displayContent(data);
        displayColors(data);
        storage(data);
    });

function displayContent(data) {
    teddiesName.innerHTML = data.name;
    imgTeddies.src = data.imageUrl;
    descriptionTeddies.innerHTML = data.description;
    priceTeddies.innerHTML = data.price / 100 + "," + data.price % 100 + " €";
}

function displayColors(data) {
    const colorsTeddies = document.getElementById("colors__teddies");
    data.colors.forEach(color => {
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


function storage(data) {

    let colorChoosen = "";

    if (data.colors.length === 1) {
        colorChoosen = data.colors[0];
    } else {
        document.getElementById('colors__teddies').addEventListener('change', (e) => {
            colorChoosen = e.target.value;
            document.getElementById("test__couleur").style.visibility = "hidden";
            console.log(colorChoosen);
        })
    }

    document.getElementById("storagePanier").addEventListener('click', () => {
        if (colorChoosen === "") {
            document.getElementById("test__couleur").style.visibility = "visible";
        } else {
            localStorage.setItem("teddiesId", data._id);
            localStorage.setItem("teddiesName", data.name);
            localStorage.setItem("teddiesPicture", data.imageUrl);
            localStorage.setItem("teddiesPrice", data.price);
            localStorage.setItem("teddiesColor", colorChoosen);
            document.getElementById("red__dot").style.visibility = "visible";
        }
    })

}
