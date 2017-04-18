var express = require('express'),
    router = express.Router(),
    User = require('../model/user');

router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/chat", (req, res) => {
    res.render("chat");
});

function io(io) {
    io.on('connection', socket => {
        console.log(socket.id);
        socket.on('incomingChat', message => {
            io.emit("displayChat", message);
        });
        socket.on("disconnect", () => {
            console.log("user has gone");
        });
    });
}

module.exports.route = router;
module.exports.io = io;
