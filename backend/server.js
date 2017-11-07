var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var mysql = require('mysql');
var cors = require('cors')

// Initialize Express App
var app = express();


var corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOptions))
// Use Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use('/', express.static(__dirname));

// Import API Routes
app.use(require('./api/temp_api'));




port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("listening to port " + port);
})

