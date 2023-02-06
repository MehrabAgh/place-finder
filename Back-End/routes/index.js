const { Router } = require("express");
const indexController = require("../controller/index");

const router = new Router()

router.get('/', indexController.index)

module.exports = router;