import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    axios
      .get("https://movie-backend-6lhc.onrender.com/movies")
      .then((res) => {

        setMovies(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "40px",
          color: "#38bdf8"
        }}
      >
        🎬 Movie Recommendation App
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px"
        }}
      >

        {movies.map((movie) => (

          <div
            key={movie.movie_id}
            style={{
              background: "linear-gradient(145deg, #1e293b, #0f172a)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              border: "1px solid #334155"
            }}
          >

            <h2
              style={{
                color: "#f8fafc",
                marginBottom: "15px"
              }}
            >
              {movie.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                marginBottom: "10px"
              }}
            >
              🎭 Genre:
              <span
                style={{
                  color: "#38bdf8",
                  marginLeft: "8px"
                }}
              >
                {movie.genre_name}
              </span>
            </p>

            <p
              style={{
                color: "#cbd5e1",
                marginBottom: "20px"
              }}
            >
              📅 Release Year:
              <span
                style={{
                  color: "#facc15",
                  marginLeft: "8px"
                }}
              >
                {movie.release_year}
              </span>
            </p>

            <a
              href={movie.teaser_link}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none"
              }}
            >

              <button
                style={{
                  backgroundColor: "#38bdf8",
                  color: "black",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  width: "100%",
                  fontSize: "16px"
                }}
              >
                ▶ Watch Teaser
              </button>

            </a>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;