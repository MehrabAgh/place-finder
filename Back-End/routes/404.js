const { Router } = require('express');

const router = new Router()

router.use((req, res) => {
    res.send("404 Error : Page not found")
})

module.exports = router;