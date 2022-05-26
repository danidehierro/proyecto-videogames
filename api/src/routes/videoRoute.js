const express = require("express");
const { getAllVideogames, getAllVideogameDetail } = require("./controlador");
const { Videogame, Genres} = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  let { name } = req.query;
  let videogamesTotal = await getAllVideogames();
  if (name) {
    let videogameName = videogamesTotal.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    videogameName.length
      ? res.status(200).send(videogameName)
      : res.status(404).send("Video game not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let videogamesTotal = await getAllVideogameDetail(id);
  res.status(200).send(videogamesTotal);
});

router.post("/", async (req, res) => {
  let { name, description, released, rating, platforms, genres, img } =
    req.body;
  try {
    if (name) {
      const allVideoGame = await getAllVideogames();
      const isVideogame = allVideoGame.find(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (!isVideogame) {
        const videogame = await Videogame.create({
          name,
          description,
          released,
          rating,
          img,
          platforms,
          genres,
        });
        const genreDb = await Genres.findAll({
          where: { name: genres },
        });

        /* const platformDb = await Platform.findAll({
          where: { name: platforms },
        }); */
        await videogame.addGenres(genreDb)//, videogame.addPlatform(platformDb);
        res.status(201).send("Video Game created successfully");
      }
      res.status(404).send("Videogame name already exist");
    }
    if (!name) return res.status(404).send("Videogame name is obligtory");
  } catch (e) {
    console.log(e);
  }
  router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    
      
    
    let videogamesTotal = await getAllVideogameDetail(id);
    res.status(200).send(videogamesTotal);
  });
});

module.exports = router;
