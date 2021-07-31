const router = require("express").Router();
const homeControllers = require("../App/http/controllers/homeController");
const orderControllers = require("../App/http/controllers/customer/orderController");

// For auth related.
router.use("/auth", require("./auth"));

// For cart related.
router.use("/cart", require("./cart"));

// Home page
router.get("/", homeControllers.home);

router.post("/orders", orderControllers.order);

module.exports = router;