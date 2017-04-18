var express = require('express'),
    app = express(),
    io = require('socket.io')(app.listen(3000)),
    path = require('path'),
    router = require('./route/');

// set views and view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// middleware for static file
app.use(express.static(path.join(__dirname, "/public")));

// handle route
app.use('/', router.route);

// handle io request
router.io(io);

//Handle error
app.use((req, res, next) => {
    var err = new Error("File not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`${err.message} ${res.statusCode}`);
});
