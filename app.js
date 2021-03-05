const express = require("express");
var app = express();
var path = require('path');


app.use(express.json({limit: '1mb'}));
app.use(express.static( __dirname + '/frontend'));

// app.get( '/', function( req, res ) {
//     res.sendFile(path.join( __dirname, 'frontend', 'index.html' ));
// });

app.post('/createTable', (req,res)=>{
    const db = require("./modules/adjustDB");
    console.log(db.addTable(), "hello");
    console.log(req.body);
    res.json({
        status: 'success'
    });
});

app.listen(8080);