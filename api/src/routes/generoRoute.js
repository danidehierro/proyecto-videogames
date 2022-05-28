const axios = require("axios");
const express = require("express");
const { Genres } = require("../db");
const { API_KEY } = process.env;
const router = express.Router();

const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

router.get("/", async (req, res) => {
  const genreApi = await axios.get(url);
  const genre = genreApi.data.results.map((e) => e.name);
  const id = genreApi.data.results.map((e) => e.id);

  genre.forEach((e) => {
    Genres.findOrCreate({
      where: { name: e},
    });
  });

  const allGenres = await Genres.findAll({ order: [["name", "ASC"]] });
  res.send(allGenres);
});

module.exports = router;