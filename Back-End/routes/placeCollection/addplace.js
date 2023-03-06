const { Router } = require("express");
const addPlaceController = require("../../controller/placeCollection/addplace");

const router = new Router()

router.post('/place/add-place', addPlaceController)

module.exports = router;