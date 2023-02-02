const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.MYSQL_URI,
    user: 'root',
    password: '',
    database: 'place-finder'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db', err);
        return;
    }
    console.log('Connection established');
});


module.exports = con;