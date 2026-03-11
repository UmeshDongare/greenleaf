let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart");
}

function loadCart(){

let table = document.getElementById("cart-items");
let total = 0;

cart.forEach(item => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${item.name}</td>
<td>₹${item.price}</td>
`;

table.appendChild(row);

total += item.price;

});

let totalBox = document.getElementById("total");

if(totalBox)
totalBox.innerText = "Total: ₹" + total;

}

function placeOrder(){

alert("Order placed successfully!");

localStorage.removeItem("cart");

}

window.onload = loadCart;