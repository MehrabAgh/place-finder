const userInfo = require('./userInfo');
const con = require('../config/database');

const addPlace = async(req, res) => {

    let dataForm = req.body;

    const value = await userInfo();

    console.log(value.ID)

    let dataNew = [
        dataForm.NamePlace,
        dataForm.PhoneNumber,
        dataForm.Description,
        dataForm.Picture,
        dataForm.Category,
        dataForm.City,
        value.ID
    ]
    console.log(dataNew)

    if (value != 0) {
        if (value.data.Subscribe > 0) {
            con.query("INSERT INTO places (`NamePlace`,`PhoneNumber`, `Description`, `Picture`, `Category`,`City` , `UserCreation`) VALUES (?)", [dataNew],
                function(err, result) {
                    if (err) throw err

                    if (result.length > 0)
                        res.json({ message: "مکان با موفقیت اضافه شد" })

                })
        } else res.json({ message: "کاربر دسترسی لازم را ندارد " })
    } else res.json({ message: "کاربر وارد نشده است" })

}

module.exports = addPlace