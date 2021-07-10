const router = require("express").Router();
const cartControllers = require("../App/http/controllers/customer/cartController");

router.get("/items", cartControllers.cart);
router.post("/update-cart", cartControllers.update);

module.exports = router;