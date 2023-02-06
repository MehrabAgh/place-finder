const { Router } = require("express");
const logoutController = require("../controller/logout");

const router = new Router()

router.post('/logout', logoutController.logout)

module.exports = router;