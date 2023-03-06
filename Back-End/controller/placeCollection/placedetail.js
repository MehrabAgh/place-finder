const con = require("../../config/database");
const userInfo = require("../userCollection/userInfo");


const placedetail = (req, res) => {
    let id = req.query.id;
    if (id != null && id != undefined && id > 0) {
        con.query('SELECT * FROM places WHERE ID ="' + id + '"', async function(err, result) {
            if (err) throw err;
            console.log(result)
            if (result.length > 0) {
                let access_user = await userInfo();

                if (!access_user.access) res.json({ NamePlace: result[0].NamePlace, Description: result[0].Description })
                else res.json({ NamePlace: result[0].NamePlace, PhoneNumber: result[0].PhoneNumber, Description: result[0].Description })

            } else {
                res.json({ message: "202 مکان مورد نظر یافت نشد !" })
            }
        })
    } else {
        res.json({ message: "101 مکان مورد نظر یافت نشد !" })
    }
}

module.exports = placedetail