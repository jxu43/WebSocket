var express = require('express');
var socket = require('socket.io');

//App set up
var app = express();
var server = app.listen(4000, function() {
    console.log('listen to port 4000')
});

//Static files
app.use(express.static('public'));

//Socket Setup
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        // console.log(data);
        io.emit('chat', data);
    });
});