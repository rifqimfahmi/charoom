var db = require('./db/user');

function login(req, res, next) {

    db.findOne({ username: req.body.username }, (err, user) => {
        if (err) return next(err);
        if (user) {
            if (user.password == req.body.password) {
                req.session.usrid = user._id;
                return res.redirect('/');
            } else {
                error("User cannot be found or wrong credential");
            }
        } else {
            error("User cannot be found or wrong credential");
        }
    });


    function error(message) {
        req.app.locals.errLogin = message;
        return res.redirect('/login');
    }
}


module.exports = login;
