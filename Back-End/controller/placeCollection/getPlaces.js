const con = require("../../config/database");

async function getPlace(city) {
    if (city != "") {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM places WHERE City ="' + city + '"', async function(err, result) {

                if (err) throw reject(err);
                if (result.length > 0) {
                    resolve(result)
                } else resolve({ message: "مکانی وجود ندارد" })
            })
        })

    } else {
        return -1
    }
}
module.exports = getPlace