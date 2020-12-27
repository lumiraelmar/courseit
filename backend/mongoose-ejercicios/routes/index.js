const express = require("express");
const router = express.Router();
const ProductService = require("../services/productService");
const ProductController = require("../controllers/productController");
const ProductInstance = new ProductController(new ProductService());
const UserService = require("../services/userService");
const UserController = require("../controllers/userController");
const UserInstance = new UserController(new UserService());
const SaleService = require("../services/saleService");
const SaleController = require("../controllers/saleController");
const SaleInstance = new SaleController(new SaleService(), new ProductService());

//PRODUCTS
router.get("/products", function (req, res, next) {
  ProductInstance.getProducts(req, res);
});

router.get("/products/freeshipping", function (req, res, next) {
  ProductInstance.getFreeShipping(req, res);
});

router.put("/products/discount", function (req, res, next) {
  ProductInstance.addDiscount(req, res);
});

router.get("/products/:id", function (req, res, next) {
  ProductInstance.getProductById(req, res);
});

router.post("/products", function (req, res, next) {
  ProductInstance.addProduct(req, res);
});

router.put("/products/:id", function (req, res, next) {
  ProductInstance.modifyProduct(req, res);
});

//USERS
router.get("/users", function (req, res, next) {
  UserInstance.getUsers(req, res);
});

router.get("/users/:id", function (req, res, next) {
  UserInstance.getUserById(req, res);
});

router.get("/users/handler/:handler", function (req, res, next) {
  UserInstance.getUserByHandler(req, res);
});

router.post("/users", function (req, res, next) {
  UserInstance.addUser(req, res);
});

//SALES
router.get("/sales", function (req, res, next) {
  SaleInstance.getSales(req, res);
});

router.get("/sales/:id", function (req, res, next) {
  SaleInstance.getSaleById(req, res);
});

router.get("/sales/handler/:handler", function (req, res, next) {
  SaleInstance.getSaleByHandler(req, res);
});

router.post("/sales", function (req, res, next) {
  SaleInstance.addSale(req, res);
});

module.exports = router;
