const { Router } = require('express');

const router = new Router()

router.use((req, res) => {
    res.json({ message: "404 Page Not Found " })
})

module.exports = router;