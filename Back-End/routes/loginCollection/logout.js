const { Router } = require("express");
const logoutController = require("../../controller/userCollection/logout");

const router = new Router()

router.post('/auth/logout', logoutController.logout)

module.exports = router;