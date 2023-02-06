const con = require("../../config/database");
const VerifyEmail = require("./APIs/emailsenderAPI");

exports.sendemail = (...param) => {
    var send = VerifyEmail(param[2], param[3]);
    if (send != '0') {
        var data = {
            Token: param[3]
        }

        con.query('UPDATE users SET ? WHERE Email ="' + param[2] + '"', data, function(err, result) {
            if (err) throw err

            console.log(result)
        })

        param[1].send("کد فعال سازی به ایمیل شما ارسال شد")

    } else param[1].send("مشکلی در سامانه به وجود آمد ، دوباره تلاش کنید")
}