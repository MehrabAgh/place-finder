const con = require("../../config/database")
const redis = require('redis');

const client = redis.createClient();

exports.verify = async(req, res) => {

    await client.connect()

    let session = req.session;

    con.query('SELECT * FROM users WHERE Token ="' + req.body.Token + '"', function(err, result) {
        if (err) throw err;

        if (result[0].Verify == 0) {
            if (result.length > 0) {

                let data = {
                    Verify: 1
                }
                if (res.type == "email") {
                    con.query('UPDATE users SET ? WHERE Email ="' + result[0].Email + '"', data, async function(_err, _result) {
                        if (_err) throw _err;

                        session.user = true;
                        session.email = result[0].Email;

                        let dataResult = { userVerified: session.user, emailUser: session.email }

                        await client.set('userCache', JSON.stringify(dataResult));
                        await client.expire('userCache', 86400);

                        res.json(dataResult)
                    })
                } else {
                    con.query('UPDATE users SET ? WHERE PhoneNumber ="' + result[0].PhoneNumber + '"', data, async function(_err, _result) {
                        if (_err) throw _err;

                        session.user = true;
                        session.PhoneNumber = result[0].PhoneNumber;
                        req.session.save();

                        let dataResult = { userVerified: session.user, PhoneNumberUser: session.PhoneNumber }

                        await client.set('userCache', JSON.stringify(dataResult));
                        await client.expire('userCache', 86400);

                        res.json(dataResult)

                    })
                }
            }
        } else {
            res.json({ message: "این توکن ، فعالسازی شده است" })
        }

    })
}