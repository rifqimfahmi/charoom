var User = require('./db/user');

function signupUser(req, res, next, user) {
    if (user.firstName &&
        user.lastName &&
        user.gender &&
        user.email &&
        user.username &&
        user.password &&
        user.confirmpass
    ) {
        if (user.password == user.confirmpass) {
            var data = {
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                email: user.email,
                username: user.username,
                password: user.password,
                country: user.country,
                birthDate: user.birthDate || "",
                hobby: splitString(user.hobby) || [],
                passion: splitString(user.passion) || [],
            }
            User.create(data, (err, user) => {
                if (err) return next(err);

                req.session.usrid = user._id;
                return res.redirect(301, "/");
            });
        }
    }
}

function splitString(string) {
    if (string) {
        var array = string.split(/,\s*/);
        return array;
    }
    return false;

}

module.exports = signupUser;
