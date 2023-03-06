const { Router } = require("express");
const verifyController = require("../../controller/tools/tools-login/verificationcode");

const router = new Router()

router.post('/auth/verify', verifyController.verify)

module.exports = router;

//verify-email