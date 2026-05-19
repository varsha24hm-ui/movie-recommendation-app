const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./config/db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DIRECT SERVER WORKING");
});

app.get("/movies", (req, res) => {

  const sql = `
    SELECT 
      movies.movie_id,
      movies.title,
      movies.release_year,
      movies.teaser_link,
      genres.genre_name
    FROM movies
    JOIN genres
    ON movies.genre_id = genres.genre_id
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      res.status(500).json({
        message: "Database Error"
      });

    } else {

      res.json(result);

    }

  });

});

app.listen(5000, () => {
  console.log("Server running on 5000");
});