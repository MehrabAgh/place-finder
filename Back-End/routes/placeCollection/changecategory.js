const { Router } = require("express");
const changeCategoryController = require("../../controller/changeCategory");

const router = new Router()

router.post('/place/change-category', changeCategoryController)

module.exports = router;