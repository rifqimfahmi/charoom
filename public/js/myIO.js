var socket = io();
$('.messageContainer')[0].style.height = $('#msgForm')[0].offsetTop - $('.nav')[0].offsetHeight + 'px';

$('form').submit(function() {
    var message = $("#msgIpt").val();
    if (message) {
        socket.emit("incomingChat", message);
        $("#msgIpt").val("");
    }
    return false;
});

socket.on('displayChat', function(message) {
    var body = $('.messageContainer')[0];
    var text = document.createElement('div');
    text.classList.add("text");
    text.innerHTML = message;
    body.appendChild(text);

    body.scrollTop = body.scrollHeight;
});
