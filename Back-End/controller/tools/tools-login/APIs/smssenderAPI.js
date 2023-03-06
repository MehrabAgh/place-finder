const Ghasedak = require("ghasedak");
const crypto = require("crypto");

let ghasedak = new Ghasedak(process.env.APIKEY);
const verifySms = (pn) => {
    var num = crypto.randomInt(1000, 9999);
    ghasedak.verification({ 'receptor': pn, 'type': '1', 'template': process.env.TEMPLATE, 'param1': num });
    return num;
}
module.exports = verifySms