const axios = require("axios");
const express = require("express");
const { Generos } = require("../db");
const { API_KEY } = process.env;
const router = express.Router();

const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

router.get("/", async (req, res) => {
  const genreApi = await axios.get(url);
  const genre = genreApi.data.results.map((e) => e.name);
  const id = genreApi.data.results.map((e) => e.id);

  genre.forEach((e, i) => {
    Generos.findOrCreate({
      where: { name: e, id: id[i] },
    });
  });

  const allGenres = await Generos.findAll({ order: [["name", "ASC"]] });
  res.send(allGenres);
});

module.exports = router;