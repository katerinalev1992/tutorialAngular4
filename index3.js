/**
 * Created by katerynalevytska on 8/14/17.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

http.listen(3535, function(){
    console.log("listeting on *:3535");
});

io.on('connection', function (socket) {
    console.log("Trigger 'connection' is called");
    socket.on('disconnect', function () {
        console.log("Socket disconnected")
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});