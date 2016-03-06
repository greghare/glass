var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/receiver.html');
});

io.on('connection', function(socket) {

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });

    socket.on('video message', function(msg) {
        io.emit('video message', msg);
    });

});

http.listen(4000, function() {
    console.log('listening on *:4000');
});