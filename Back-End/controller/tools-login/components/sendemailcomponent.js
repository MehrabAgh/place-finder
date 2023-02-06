//function for send email component
const randtoken = require('rand-token');
const con = require("../../../config/database");
const { CreateUser } = require("./createuser");
const { sendemail } = require("../sendemail");

exports.SendEmailComp = (req, res) => {

    var email = req.body.input; // get email    

    //find user in database
    con.query('SELECT * FROM users WHERE Email ="' + email + '"', function(err, result) {
        if (err) throw err;

        //if user founded
        if (result.length > 0) {

            var token = randtoken.generate(10);
            if (result[0].Verify == 0) {
                sendemail(req, res, email, token)
            } else res.send("این ایمیل ثبت شده است")
        }
        //if user not founded
        else {
            CreateUser(req, res);
            //create new user            
        }
    });
}