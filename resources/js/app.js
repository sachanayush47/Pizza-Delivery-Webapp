import axios from "axios"
import Noty from "noty"

console.log("Jai Shree Ram");

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.getElementById("cartCounter");

console.log(addToCart);

function updateCart(pizza) {
    axios.post("/cart/update-cart", pizza).then((res) => {
        console.log(res);
        cartCounter.innerText = res.data.totalQty;
        new Noty({
            type: "success",
            timeout: 2000,
            progressBar: false,
            text: "Item added to cart!"
        }).show();
    }).catch((err) => {
        new Noty({
            type: "error",
            timeout: 2000,
            progressBar: false,
            text: "Failed to add item. Try again!"
        }).show();
    });
}

addToCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        console.log(pizza);
        updateCart(pizza)
    });
});