const con = require("../../config/database")

exports.verify = (req, res) => {

    let session = req.session;

    con.query('SELECT * FROM users WHERE Token ="' + req.body.Token + '"', function(err, result) {
        if (err) throw err;

        if (result[0].Verify == 0) {
            if (result.length > 0) {

                let data = {
                    Verify: 1
                }
                if (res.type == "email") {
                    con.query('UPDATE users SET ? WHERE Email ="' + result[0].Email + '"', data, function(_err, _result) {
                        if (_err) throw _err;

                        session.user = true;
                        res.json({ userVerified: session.user })
                    })
                } else {
                    con.query('UPDATE users SET ? WHERE PhoneNumber ="' + result[0].PhoneNumber + '"', data, function(_err, _result) {
                        if (_err) throw _err;

                        session.user = true;
                        res.json({ userVerified: session.user })

                    })
                }
            }
        } else {
            res.json({ message: "این توکن ، فعالسازی شده است" })
        }

    })
}