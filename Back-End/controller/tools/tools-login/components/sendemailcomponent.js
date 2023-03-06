//function for send email component
const randtoken = require('rand-token');
const con = require("../../../config/database");
const { CreateUser } = require("./createuser");
const { sendemail } = require("../sendemail");
const redis = require('redis');

const client = redis.createClient();

(async() => {
    await client.connect()
})();

exports.SendEmailComp = (req, res) => {

    var email = req.body.input; // get email    

    //find user in database
    con.query('SELECT * FROM users WHERE Email ="' + email + '"', async function(err, result) {
        if (err) throw err;

        //if user founded
        if (result.length > 0) {

            const value = await client.get('userCache');
            let jsonvalue = JSON.parse(value)

            if (jsonvalue != null) res.json({ message: "این ایمیل قبلا وارد شده است" })
            else {
                con.query('UPDATE users SET Verify = "' + 0 + '" WHERE users.ID = "' + result[0].ID + '" ;', function(err, result) {
                    if (err) throw err
                    if (result.length > 0)
                        console.log(result)
                })
            }
            var token = randtoken.generate(10);
            if (result[0].Verify == 0) {
                sendemail(req, res, email, token)
            } else res.json({ message: "این ایمیل ثبت شده است" })
        }
        //if user not founded
        else CreateUser(req, res); //create new user   
    });
}