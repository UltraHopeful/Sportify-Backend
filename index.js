var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to db
//mongoose.connect('mongodb://ip/dbname');
//var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Service is running');
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is running!")
})