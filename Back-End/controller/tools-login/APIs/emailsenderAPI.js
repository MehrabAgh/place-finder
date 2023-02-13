const nodemailer = require('nodemailer')

const VerifyEmail = (email, token) => {

    let _email = email;
    let _token = token;

    let mail = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",

        auth: {
            user: 'aghaeemehrab@gmail.com', // Your email id
            pass: 'mehrab1381' // Your password
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: _email,
        subject: 'ایمیل فعال سازی | تیم توسعه دهندگان وینو ',
        html: '<p> کد فعال سازی ارسالی شما جهت ورود به اپلیکیشن placeFinder"' + _token + '" می باشد</p>'

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