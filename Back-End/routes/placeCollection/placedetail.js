const { Router } = require("express");
const placeController = require("../../controller/placeCollection/placedetail");

const router = new Router()

router.get('/place/place-info', placeController)

module.exports = router;