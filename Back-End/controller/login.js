const { SendEmailComp } = require("./tools-login/components/sendemailcomponent");
const { SendSmsComp } = require("./tools-login/components/sendsmscomponent");
const { CheckInput } = require("./tools-login/other/checkinputs")

exports.login = (req, res) => {
    if (CheckInput(req.body.input))
        SendEmailComp(req, res)
    else SendSmsComp(req, res);
}