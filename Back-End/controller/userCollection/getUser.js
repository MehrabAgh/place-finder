const userInfo = require("./userInfo");

const getUser = async(req, res) => {

    const value = await userInfo();
    console.log(value)

    if (value.access) {
        res.json({ message: " کاربر مورد نظر یافت شد !", data: value.data, access: value.access })
    } else res.json({ message: " کاربر مورد نظر یافت نشد !" })

}

module.exports = getUser