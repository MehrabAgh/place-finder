const redis = require('redis');
const con = require('../../config/database');
const userInfo = require('./userInfo');

const client = redis.createClient();

(async() => {
    await client.connect()
})();

const selectCity = async(req, res) => {

    const value = await userInfo();
    let current_city = req.body.city

    const city = await client.get('cityCache');

    if (city != current_city) {

        if (value != null) {

            con.query('UPDATE users SET City = "' + current_city + '" WHERE users.ID = "' + value.data.ID + '" ;', async function(err, result) {
                if (err) throw err;

                if (result.changedRows > 0) {
                    res.json({ message: "شهر مورد نظر با موفقیت انتخاب شد" })
                    await client.set('cityCache', current_city);
                } else res.json({ message: "شهر مورد نظر از قبل انتخاب شده است " })
            })

        } else await client.set('cityCache', current_city);
    } else res.json({ message: "شهر مورد نظر از قبل انتخاب شده است " })
}

module.exports = selectCity