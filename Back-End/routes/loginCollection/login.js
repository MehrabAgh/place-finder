const { Router } = require("express");
const loginController = require("../../controller/userCollection/login");

const router = new Router()

router.post('/auth/login', loginController.login)

module.exports = router;