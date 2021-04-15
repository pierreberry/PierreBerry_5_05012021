//Function for the red dot when there is something in the cart
function redDotCart() {
    if (localStorage.key("cart")) {
        document.getElementById("red__dot").style.visibility = "visible";
    }
}

