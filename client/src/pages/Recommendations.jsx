import React, { useState } from "react";
import axios from "axios";

function Recommendations() {

  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {

    const response = await axios.get(
      `http://localhost:5000/api/movies/recommend/${genre}`
    );

    setMovies(response.data);
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Movie Recommendation App</h1>

      <input
        type="text"
        placeholder="Enter Genre ID"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button onClick={fetchMovies}>
        Search
      </button>

      <div>

        {movies.map((movie, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >

            <h2>{movie.movie_name}</h2>

            <p>Rating: {movie.rating}</p>

            <p>Language: {movie.language}</p>

            <p>Theme: {movie.theme}</p>

            <p>Promo Code: {movie.promo_code}</p>

            <a
              href={movie.teaser_link}
              target="_blank"
              rel="noreferrer"
            >
              Watch Teaser
            </a>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Recommendations;