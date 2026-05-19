const express = require("express");

const router = express.Router();

const {
  getRecommendations
} = require("../controllers/movieController");

router.get("/recommend/:genre", getRecommendations);

module.exports = router;