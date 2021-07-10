const router = require("express").Router();
const homeControllers = require("../App/http/controllers/homeController");
const cartControllers = require("../App/http/controllers/customer/cartController");

// For auth related.
router.use("/auth", require("./auth"));

// For cart related.
router.use("/cart", require("./cart"));

// Home page
router.get("/", homeControllers.home);

module.exports = router;