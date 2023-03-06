const { Router } = require("express");
const changeCategoryController = require("../../controller/tools/changeCategory");

const router = new Router()

router.post('/place/change-category', changeCategoryController)

module.exports = router;