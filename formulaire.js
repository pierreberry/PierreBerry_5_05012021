//Request send for the confirmation
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
        window.location.href = "confirmation.html?orderId=" + order.orderId + "&price=" + cart.displayTotalPrice();
    })
}

//test validation formulaire
function validateForm() {
    let contact = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: ''
    }
    const verifMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (verifMail.test(document.getElementById("email").value)) {
        contact.email = document.getElementById("email").value;
    }
    if (!document.getElementById("lastName").value == "") {
        contact.lastName = document.getElementById("lastName").value;
    }
    if (!document.getElementById("firstName").value == "") {
        contact.firstName = document.getElementById("firstName").value;
    }
    if (!document.getElementById("address").value == "") {
        contact.address = document.getElementById("address").value;
    }
    if (!document.getElementById("city").value == "") {
        contact.city = document.getElementById("city").value;
    }
    return contact;
}

//get all the function for send the order
function validate(e) {
    e.preventDefault();
    validateForm();
    cart.retrieveProductIds();
    sendOrder(validateForm(), cart.retrieveProductIds())
}

//event for validate the order
function init() {
    document.getElementById("myForm").addEventListener("submit", validate);
}

init();
