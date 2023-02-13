const { Router } = require("express");
const changeCityController = require("../../controller/changeCity");

const router = new Router()

router.post('/info/change-city', changeCityController)

module.exports = router;