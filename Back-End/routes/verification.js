const { Router } = require("express");
const verifyController = require("../controller/tools-login/verificationcode");

const router = new Router()

router.post('/verify', verifyController.verify)

module.exports = router;

//verify-email