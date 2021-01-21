function urlId(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
const dataProduit = urlId("id");


fetch(`http://localhost:3000/api/teddies/` + dataProduit)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        prix.innerHTML = data.price;
    });
