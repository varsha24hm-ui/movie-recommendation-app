const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./config/db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Movie Backend Running");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});