//function for send sms component 
const { CreateUser } = require("./createuser")
const con = require("../../../config/database");
const { sendsms } = require("../sendsms");

exports.SendSmsComp = (req, res) => {
    let pn = req.body.input

    con.query('SELECT * FROM users WHERE PhoneNumber ="' + pn + '"', function(err, result) {
        if (err) throw err;
        console.log(result)
        if (result.length > 0) {

            if (result[0].Verify == 0) {
                sendsms(req, res, pn);
            } else res.send("این شماره تماس قبلا ثبت شده است")

        } else {
            CreateUser(req, res, pn);
            //create new user            
        }
    });
}