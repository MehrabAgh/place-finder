//function for send sms component 
const { CreateUser } = require("./createuser")
const con = require("../../../../config/database");
const { sendsms } = require("../sendsms");

const redis = require('redis');

const client = redis.createClient();

(async() => {
    await client.connect()
})();

exports.SendSmsComp = (req, res) => {
    let pn = req.body.input

    con.query('SELECT * FROM users WHERE PhoneNumber ="' + pn + '"', async function(err, result) {
        if (err) throw err;

        //if user founded
        if (result.length > 0) {

            const value = await client.get('userCache');
            let jsonvalue = JSON.parse(value)

            if (jsonvalue != null) res.json({ message: "این شماره تماس قبلا وارد شده است" })
            else {
                con.query('UPDATE users SET Verify = "' + 0 + '" WHERE users.ID = "' + result[0].ID + '" ;', function(err, result) {
                    if (err) throw err
                    if (result.length > 0)
                        console.log(result)
                })
            }
            if (result[0].Verify == 0) {
                sendsms(req, res, pn);
            } else res.json({ message: "این شماره تماس قبلا وارد شده است" })
        } else CreateUser(req, res, pn);
    });
}