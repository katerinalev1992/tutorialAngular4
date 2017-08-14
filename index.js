var mongoose = require('mongoose');
var app = require('express');
var http = require('http').Server(app);
mongoose.connect('mongodb://localhost/mongooseTest');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected to DB")
});

http.listen(3800, function(){
    console.log('listening on *:3800');
});

var dogSchema = mongoose.Schema({
    name: String,
    age: String
})

var Dog = mongoose.model('Dog', dogSchema);

var d1 = new Dog({name: "Poppy", age: "2 years"});

d1.save(function (err, d1) {
    if(err) return console.log(err);
    else return console.log("Dog added to db");
})

var d2 = new Dog({name: "Molly", age: "8 years"});

d2.save(function (err, d2) {
    if(err) return console.log(err);
    else return console.log("Dog added to db");
})


