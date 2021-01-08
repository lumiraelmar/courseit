const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const UserService = require("../services/userService");
const UserInstance = new UserController(new UserService());
const passport = require("passport");
const checkAdmin = require("../utils/chechAdmin");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("index");
});

router.get("/onlyadmins", checkAdmin, (req, res, next) => {
  res.send("solo me acceden admins");
});

router.post("/api/login", passport.authenticate("local"), (req, res, next) => {
  res.send("logged in");
});

router.get("/api/verify", (req, res, next) => {
  res.json(req.user);
});

router.post("/api/create", (req, res, next) => {
  UserInstance.createUser(req, res);
});

module.exports = router;
