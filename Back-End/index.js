const express = require("express")
const dotEnv = require('dotenv');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(cookieParser());

app.use(session({
    secret: '123458cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))


dotEnv.config({ path: './config/config.env' })


app.use(require("./routes/index"))
app.use(require("./routes/loginCollection/login"))
app.use(require("./routes/loginCollection/verification"))
app.use(require("./routes/loginCollection/logout"))
app.use(require("./routes/userCollection/getuser"))
app.use(require("./routes/placeCollection/placedetail"))
app.use(require("./routes/placeCollection/changecategory"))
app.use(require("./routes/placeCollection/addplace"))
app.use(require("./routes/userCollection/changecity"))

app.use(require('./routes/404'))

app.listen(process.env.PORT, () => console.log("start server"))