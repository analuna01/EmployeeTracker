var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    database: "(..db/schema.sql)",
    user: "root",
    password: "root",
});