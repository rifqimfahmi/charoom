var socket = io();

$('form').submit(function(){
	socket.emit("incomingChat", $("#msgIpt").val());
	$("#msgIpt").val("");
	return false;
});

socket.on('displayChat', function(message){
	var body = $('.messageContainer')[0];
	var text = document.createElement('div');
	text.classList.add("text");
	text.innerHTML = message;

	body.appendChild(text);
});