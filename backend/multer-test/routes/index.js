const express = require("express");
const router = express.Router();
const multer = require("multer");
const PokemonController = require("../controllers/pokemonController");
const PokemonService = require("../services/pokemonService");
const PokemonInstance = new PokemonController(new PokemonService());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });

router.post("/pokemon", upload.single("pokemon"), function (req, res, next) {
  PokemonInstance.addPokemon(req, res);
});

router.get("/pokemon", function (req, res, next) {
  PokemonInstance.getPokemons(req, res);
});

router.put("/pokemon/:name", function (req, res, next) {
  PokemonInstance.modifyPokemonByName(req, res);
});

router.delete("/pokemon/:name", function (req, res, next) {
  PokemonInstance.deletePokemon(req, res);
});

// router.post("/upload", upload.single("avatar"), function (req, res) {
//   console.log(req.body, req.file);
//   return res.json({
//     error: false,
//     file: req.file,
//     body: req.body,
//   });
// });

module.exports = router;
