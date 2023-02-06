exports.logout = (req, res) => {
    let session = req.session;
    session.user = false;
    res.redirect('/')
}