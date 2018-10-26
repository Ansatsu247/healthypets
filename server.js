var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, "/healthyApp/dist")));
app.use(bodyParser.json());


app.listen(8000, function () {
        console.log("running this express project on port 8000")
    })