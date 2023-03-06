const con = require('../../config/database');

const selectCategory = async(req, res) => {

    let current_category = req.body.id
    let city = req.body.city

    con.query('SELECT * FROM places WHERE Category = "' + current_category + '" AND City = "' + city + '";', function(err, result) {
        if (err) throw err

        if (result.length > 0) res.json(result)
        else res.json({ message: "مکانی یافت نشد" })
    })
}

module.exports = selectCategory