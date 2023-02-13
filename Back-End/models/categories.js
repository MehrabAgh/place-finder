const con = require("../config/database")

const GetCategory = async() => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM category",
            (err, result) => {
                return err ? reject(err) : resolve(result);
            }
        );
    });
}

module.exports = GetCategory