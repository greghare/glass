var socket = io.connect('127.0.0.1:4000');
$('form').submit(function() {
    socket.emit('video message', $('#m').val());
    socket.emit('control_message', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('video message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});


socket.on('control_message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});
