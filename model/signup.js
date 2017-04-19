var User = require('./user');

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
        	}
        	User.create(data, (err, data) => {
        		if(err) return next(err); 
        		res.redirect(301, "/");
        	});
        }
    }
}

module.exports = signupUser;
