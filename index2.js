/**
 * Created by katerynalevytska on 8/14/17.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

var name = "Express";

app.get('/helloExpress', function (req, res) {
    res.send('Hello ' + name);
})

app.listen(3434, function(){
    console.log("App listening port 3434");
})