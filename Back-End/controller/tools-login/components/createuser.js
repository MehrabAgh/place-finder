const con = require("../../../config/database");
const Model = require("../../../models/users");
const { sendsms } = require("../sendsms");
const { CheckInput } = require("../other/checkinputs");

exports.CreateUser = (req, res, inp) => {
    let state = CheckInput(inp)
    console.log(state)
    let model = new Model(null, " ", " ", !state ? inp : " ", state ? inp : " ", 'defualt', ' ')
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