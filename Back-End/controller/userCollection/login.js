const { SendEmailComp } = require("../tools/tools-login/components/sendemailcomponent");
const { SendSmsComp } = require("../tools/tools-login/components/sendsmscomponent");
const { CheckInput } = require("../tools/tools-login/other/checkinputs")

exports.login = (req, res) => {
    if (CheckInput(req.body.input))
        SendEmailComp(req, res)
    else SendSmsComp(req, res);
}