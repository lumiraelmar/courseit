const express = require("express");
const router = express.Router();
const FirstController = require("../controllers/FirstController");
const FirstInstance = new FirstController();
const SecondController = require("../controllers/SecondController");
const SecondInstance = new SecondController();

//ejercicio 2.0
router.get("/calcular", (req, res, next) => {
  SecondInstance.getPrimos(req, res);
});

//ejercicio 2.1
router.get("/user/:id", (req, res, next) => {
  SecondInstance.getUser(req, res);
});

//ejercicio 2.2 y 2.3
router.get("/user2/:id", (req, res, next) => {
  SecondInstance.getUser2(req, res);
});

//ejercicio 2.4
router.get("/pokemon", (req, res, next) => {
  SecondInstance.getPokemonesPrimos(req, res);
});

// ejercicio 3
router.get("/:name", (req, res, next) => {
  FirstInstance.getName(req, res);
});

//ejercicio 4
router.get("/num/:num", (req, res, next) => {
  FirstInstance.getNum(req, res);
});

//ejercicio 5
router.get("/palindromo/:str", (req, res, next) => {
  FirstInstance.getPalindromo(req, res);
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("hola");
});

module.exports = router;
