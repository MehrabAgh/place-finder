const nodemailer = require('nodemailer')

const VerifyEmail = (email, token) => {

    let _email = email;
    let _token = token;

    let mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aghaeemehrab@gmail.com', // Your email id
            pass: 'mehrab1381' // Your password
        }
    });

    let mailOptions = {
        from: '[email protected]',
        to: _email,
        subject: 'Email verification - PlaceFinder',
        html: '<p>You requested for email verification, kindly use this <a href="http://localhost:3000/verify-email?token=' + _token + '">link</a> to verify your email address</p>'

    };

    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            return 1
        } else {
            return 0
        }
    });
}

module.exports = VerifyEmail