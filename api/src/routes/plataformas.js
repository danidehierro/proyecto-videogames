const axios = require("axios");
const express = require("express");
//const { Platform } = require("../db");
const { API_KEY } = process.env;
const router = express.Router();



router.get("/", async (req, res) => {
  const platformApi = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`);
  const platforms = platformApi.data.results.map((e) => e.name);
  const id = platformApi.data.results.map((e) => e.id);

 /*  platforms.forEach((e, i) => {
    Platform.findOrCreate({
      where: { name: e, id: id[i] },
    });
  }); */

  const allPlatforms = await Platform.findAll({ order: [["name", "ASC"]] });
  res.send(allPlatforms);
});

module.exports = router;