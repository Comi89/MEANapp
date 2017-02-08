var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
mongoose.connect('mongodb://localhost:node_rest');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));


var port = 3333;
app.listen(port);

console.log("Server is running and listen on " + port);
