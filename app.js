const express = require("express");
const mysql = require("mysql");
const con = require("./modules/connection");

var app = express();
var path = require('path');
app.use(express.static( __dirname + '/frontend'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});

app.listen(8080);