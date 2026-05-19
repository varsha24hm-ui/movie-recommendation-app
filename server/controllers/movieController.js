const axios = require("axios");

const API_KEY = "588fa84a";

exports.getRecommendations = async (req, res) => {

  try {

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=batman`
    );

    const movies = response.data.Search.map((movie) => ({
      movie_name: movie.Title,
      rating: "8.0",
      language: "English",
      theme: "Action",
      teaser_link:
        `https://youtube.com/results?search_query=${movie.Title}+trailer`,
      promo_code: "MOVIE50"
    }));

    res.json(movies);

  } catch (error) {

    console.log(error);

  }
};