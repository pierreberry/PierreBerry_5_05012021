function sendOrder(contact, products) {
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ contact, products })
    }).then((response) => {
        return response.json();
    }).then((order) => {
        window.location.href = "confirmation.html?orderId=" + order.orderId;
    })
}

function validateForm() {
    let contact = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: ''
    }
    const verifMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const verifInput = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    if (verifMail.test(document.getElementById("email").value)) {
        contact.email = document.getElementById("email").value;
    }
    contact.lastName = document.getElementById("lastName").value;
    contact.firstName = document.getElementById("firstName").value;
    contact.address = document.getElementById("address").value;
    contact.city = document.getElementById("city").value;
    return contact;
}

function retrieveProducts() {
    let products = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
        products.push(cart[i].id);
    }
    return products;
}

function validate(e) {
    e.preventDefault();
    validateForm();
    retrieveProducts();
    sendOrder(validateForm(), retrieveProducts())
}

function init() {
    document.getElementById("myForm").addEventListener("submit", validate);
}

init();