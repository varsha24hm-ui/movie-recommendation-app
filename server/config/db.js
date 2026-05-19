const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Varsha@2006",
  database: process.env.DB_NAME || "movie_app"
});

connection.connect((err) => {

  if (err) {

    console.log("Database connection failed");
    console.log(err);

  } else {

    console.log("MySQL Connected");

  }

});

module.exports = connection;