const router = require("express").Router();
const authController = require("../App/http/controllers/authController");
const passportLocal = require("../App/config/paasport-local-strategy");

router.get("/login", passportLocal.checkAuthentication, authController.login);
router.post("/login", authController.postLogin);

router.get("/register", passportLocal.checkAuthentication, authController.register);
router.post("/register", authController.postRegister);

router.post("/logout", authController.logout);

module.exports = router;