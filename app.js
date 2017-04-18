var express = require('express'),
    app = express(),
    server = app.listen(3000, () => { console.log("Running localhost on port 3000"); }),
    io = require('socket.io')(server),
    path = require('path'),
    route = require('./route/');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use('/', route);

io.on('connection', socket => {
	console.log(socket.id);
	socket.on('incomingChat', message => {
		io.emit("displayChat", message);
	});
	socket.on("disconnect", () => {
		console.log("user has gone");
	});
});



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
