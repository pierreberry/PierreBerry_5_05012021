function orderId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderId = urlParams.get('orderId');
    return orderId;
}
function totalPrice() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const totalPrice = urlParams.get('price');
    return totalPrice;
}

function displayOrder() {
    document.querySelector('strong').textContent = orderId();
}
function displayPrice() {
    document.querySelector('span').textContent = totalPrice();
}
displayOrder();
displayPrice();