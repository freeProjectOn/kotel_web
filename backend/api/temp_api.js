var express = require('express');
var app = express();

// Import Temp Module Containing Functions Related To Temp Data
var temp = require('../models/temp');

// API Routes
app.get('/getTempAvg', function(req, res) {

	temp.findTempAvg(function(err, rows, fields) {
        if (err) {
            throw err;
        }
        res.json(rows);
	})
});

/*
app.post('/adduser', function(req, res, next) {
	
	var data = req.body;
	temp.findByUsername(data.username, function(err, rows, fields) {
		if(rows.length == 1) {
			temp.sendResponse(false, res);
		} else {
			temp.encrypt(data, function(err, hash) {
				data = {
					username: data.username,
					hashedpassword: hash
				};
				temp.addUser(data, function(err, info) {
					if(err) throw err;
					console.log(info);
					temp.sendResponse(true, res);
				});
			});
		};
	});
});
*/

module.exports = app;
