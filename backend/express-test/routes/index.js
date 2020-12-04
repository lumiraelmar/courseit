const express = require("express");
const router = express.Router();
const UserController = require("../controllers/controller");
const UserInstance = new UserController();

//ejercicio 3
router.get("/:name", (req, res, next) => {
  UserInstance.getName(req, res);
});

//ejercicio 4
router.get("/num/:num", (req, res, next) => {
  UserInstance.getNum(req, res);
});

//ejercicio 5
router.get("/palindromo/:str", (req, res, next) => {
  UserInstance.getPalindromo(req, res);
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("hola");
});

module.exports = router;
