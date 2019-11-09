const mysql = require('mysql');

// database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "test_user",
    password: "test@123",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    let userQuery = "CREATE TABLE IF NOT EXISTS user (name VARCHAR(255), address VARCHAR(255))";
    con.query(userQuery, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

});

module.exports = con;