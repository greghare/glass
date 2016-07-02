var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/sender.html');
});

io.on('connection', function(socket) {

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });

    socket.on('video message', function(msg) {
        io.emit('video message', msg);
    });

    socket.on('control_message', function(msg) {
        io.emit('control_message', msg);
    });

});

http.listen(3000, function() {
    console.log('Glass Controller started on *:3000');
});
