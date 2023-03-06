const con = require("../config/database");

exports.Cities = () => {

    return new Promise((resolve, reject) => {

        con.query('SELECT * FROM cities', async function(err, result) {

            if (err) throw reject(err);

            if (result.length > 0) {
                resolve(result)
            }
        })
    })
}
exports.Provinces = () => {
    return new Promise((resolve, reject) => {

            con.query('SELECT * FROM province', async function(err, result) {

                if (err) throw reject(err);

                if (result.length > 0) {
                    resolve(result)
                }
            })
        })
        // get provinces in 

}