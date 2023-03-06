exports.logout = (req, res) => {
    let session = req.session;
    session.user = false;
    session.destroy();
    res.redirect('/')
}