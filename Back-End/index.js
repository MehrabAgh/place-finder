const express = require("express")
const dotEnv = require('dotenv');

const user = require("./models/users");
const { usertype } = require("./models/usertype");
const con = require("./config/database");

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
dotEnv.config({ path: './config/config.env' })

app.get("/", (req, res) => {
    let obj = new user(12, "mehrab", "aghaee", "09037834381", usertype.specialuser, "mashhad");
    console.log(obj)
    con.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.log(rows);
        res.send(rows)
    });

    // res.send(`<span><h1>hello fucking jalili</h1><p>${obj.starting(obj.firstname,obj.lastname)}</p></span>`)

})

app.listen(process.env.PORT, () => console.log("start server"))