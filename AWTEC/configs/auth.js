module.exports = {
    // If user is not yet authenticated
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'Please log in first!')
        res.redirect('/')
    },
    // If user is already authenticated
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        }
        res.redirect('/chats')
    }
}
