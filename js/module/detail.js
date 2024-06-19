import { headers } from "../components/env.js";

function updatePrice(count) {
    let priceElement = document.getElementById('price');
    priceElement.textContent = (initialPrice * count).toFixed(2);
}

function updateTotal(count, price) {
    document.getElementById('totalItems').textContent = count;
    document.getElementById('totalPrice').textContent = (price * count).toFixed(2);
    document.getElementById('subTotal').textContent = (price * count).toFixed(2);
}

function incrementCheckoutCount() {
    let countElement = document.getElementById('checkoutCount');
    let count = parseInt(countElement.textContent);
    let price = parseFloat(document.getElementById('itemPrice').textContent);
    countElement.textContent = count + 1;
    updateTotal(count + 1, price);
}
function decrementCount() {
    let countElement = document.getElementById('countNumber');
    let count = parseInt(countElement.textContent);
    if (count > 1) {
        countElement.textContent = count - 1;
        updatePrice(count - 1);
    }
}

function addToCart() {
    let count = parseInt(document.getElementById('countNumber').textContent);
    let price = parseFloat(document.getElementById('price').textContent);
    let product = {
        title: "El principito",
        count: count,
        price: price
    };
    localStorage.setItem('cart', JSON.stringify(product));
    window.location.href = 'checkout.html';
}
export const getProductId = async({id:idCategory})=>{
    console.log("Esperando .......");
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${idCategory}&country=US`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}