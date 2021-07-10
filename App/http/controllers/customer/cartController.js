module.exports = {
    cart: (req, res) => {
        res.render("customers/cart", {
            title: "Cart"
        });
    },
    update: (req, res) => {
        console.log("Session");
        console.log(req.session);

        // For the first time creating cart and adding basic object structure.
        if(!req.session.cart) {
            req.session.cart = {
                items: {},
                totalQty: 0,
                totalPrice: 0
            }
        }

        console.log("Body");
        console.log(req.body);

        let cart = req.session.cart;

        // Check if item does not exist in cart.
        if(!cart.items[req.body._id]) {
            cart.items[req.body._id] = {
                item: req.body,
                qty: 1
            }
            cart.totalQty = cart.totalQty + 1;
            cart.totalPrice += req.body.price;
        } else {
            cart.items[req.body._id].qty += 1;
            cart.totalQty += 1;
            cart.totalPrice += req.body.price;
        }

        console.log("Cart");
        console.log(cart);

        return res.json({ totalQty: req.session.cart.totalQty });
    }
}