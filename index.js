var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 8080,
    database: employeeTracker_db,
    user: "root",
    password: "root",
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});