function orderId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderId = urlParams.get('orderId');
    return orderId;
}

function displayOrder() {

    document.querySelector('strong').textContent = orderId();
}
displayOrder();