var bcrypt = require('bcrypt');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
    port: '3333',
    user: 'root',
	password: 'root',
	database: 'id724433_db_kotel'
});

connection.connect(function(err) {
	if (err) {
        console.log('error when connecting to db:', err);
	} else {
        console.log("Database connected");
    }
});


module.exports.findTempAvg = function(callback) {
	connection.query("SELECT * FROM prum_teploty ORDER BY datum DESC", callback);
}

/*
module.exports.addUser = function(data, callback) {
	connection.query("INSERT INTO users SET ?", data, callback);
}

module.exports.findByUsername = function(username, callback) {
	connection.query("SELECT * FROM users WHERE username = '" + username + "'", callback);
}

module.exports.encrypt = function(data, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(data.password, salt, callback);
	})
}

*/

module.exports.sendResponse = function(success, res) {
	if(success) {
		res.send({'success': 'true'});
	} else {
		res.send({'success': 'false'});
	}
}