const { Router } = require("express");
const loginController = require("../controller/login");

const router = new Router()

router.post('/login', loginController.login)

module.exports = router;