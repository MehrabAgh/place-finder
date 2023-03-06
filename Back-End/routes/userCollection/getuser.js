const { Router } = require("express");
const getUserController = require("../../controller/userCollection/getUser");

const router = new Router()

router.get('/info/getuser', getUserController)

module.exports = router;