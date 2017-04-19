var router = require('express').Router(),
    signupUser = require('../model/signup'),
    messages = [];

router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/chat", (req, res) => {
    res.render("chat");
});

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.post("/signup", (req, res, next) => {
    signupUser(req, res, next, req.body);
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
