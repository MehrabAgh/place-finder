const con = require("../../config/database");
const verifySms = require("./APIs/smssenderAPI");

exports.sendsms = (...param) => {
    var send = verifySms('09037834381'); // for test
    console.log(send)
    if (send != null) {
        var data = {
            Token: send
        }
        con.query('UPDATE users SET ? WHERE PhoneNumber ="' + param[2] + '"', data, function(err, result) {
            if (err) throw err

            console.log(result)
        })

        param[1].send("کد فعال سازی به شماره تماس ارسال شد")

    } else param[1].send("مشکلی در سامانه به وجود آمد ، دوباره تلاش کنید")
}