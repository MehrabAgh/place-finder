const con = require("../../../config/database");
const Model = require("../../../models/users");
const { sendsms } = require("../sendsms");
const { CheckInput } = require("../other/checkinputs");
const redis = require('redis');

const client = redis.createClient();

(async() => {
    await client.connect()
})();


exports.CreateUser = async(req, res, inp) => {
    let state = CheckInput(inp)
    const city = await client.get('cityCache');

    let model = new Model(null, " ", " ", !state ? inp : " ", state ? inp : " ", 'defualt',
        city != null || city != " " ? city : "")

    let data = [
        model.firstname,
        model.lastname,
        model.phonenumber,
        model.email,
        '',
        model.typecity,
        model.typeuser
    ]
    con.query(`INSERT INTO users (FirstName, LastName, PhoneNumber , Email, Token, City , Type) VALUES (?) `, [data], (err, result, field) => {
        if (err) throw err;

        if (!state) sendsms(req, res, inp);
    })
}