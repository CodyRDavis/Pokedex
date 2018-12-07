// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: 'root',
      password: "Socorro!3401",
      database: "pokedex_db"
  });
}
// Make connection.
connection.connect(function(err) {
  if (err) throw err
  console.log("DATABASE CONNECTION: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
