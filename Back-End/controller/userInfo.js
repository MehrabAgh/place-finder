const redis = require('redis');
const con = require('../config/database');

const client = redis.createClient();

(async() => {
    await client.connect()
})();

async function userInfo() {

    const value = await client.get('userCache');
    let jval = JSON.parse(value)
    console.log(value)
    if (jval.PhoneNumberUser != "") {

        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM users WHERE PhoneNumber ="' + jval.PhoneNumberUser + '"', async function(err, result) {

                if (err) throw reject(err);
                if (result.length > 0) {
                    let info = {
                        ID: result[0].ID,
                        FirstName: result[0].FirstName,
                        LastName: result[0].LastName,
                        PhoneNumber: result[0].PhoneNumber,
                        Email: result[0].Email,
                        City: result[0].City,
                        Type: result[0].Type,
                        Subscribe: result[0].Subscribe,
                        CreatedTime: result[0].CreatedTime
                    }
                    if (result[0].Verify == 1) {
                        resolve({ data: info, access: true })
                    } else resolve({ data: info, access: false })
                }
            })
        })

    }
}
module.exports = userInfo