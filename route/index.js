var router = require('express').Router(),
    Util = require('../model/util'),
    messages = [];

router.get("/", (req, res, next) => {
    if(req.session.usrid){
        req.app.locals.usrid = req.session.usrid;
    }
    res.render("index");
});

router.get("/chat", (req, res, next) => {
    res.render("chat");
});

router.get("/signup", (req, res, next) => {
    res.render('signup');
});

router.post("/signup", (req, res, next) => {
    Util.signup(req, res, next, req.body);
});

router.get("/logout", (req, res, next) => {
    req.app.locals = {};
    req.session.destroy();
    res.redirect(301, "/");
});

function io(io) {
    io.on('connection', socket => {
        messages.forEach((message) => {
            socket.emit("displayChat", message);
        });
        socket.on('incomingChat', message => {
            messages.push(message);
            io.emit("displayChat", message);
        });
        socket.on("disconnect", () => {
            console.log("user has gone");
        });
    });
}

module.exports.route = router;
module.exports.io = io;
