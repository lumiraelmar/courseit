const express = require("express");
const router = express.Router();
const ProductService = require("../services/productService");
const ProductController = require("../controllers/productController");
const ProductInstance = new ProductController(new ProductService());

/* GET home page. */
router.get("/products", function (req, res, next) {
  ProductInstance.getProducts(req, res);
});

router.get("/products/freeshipping", function (req, res, next) {
  ProductInstance.getFreeShipping(req, res);
});

router.get("/products/:id", function (req, res, next) {
  ProductInstance.getProduct(req, res);
});

router.post("/products", function (req, res, next) {
  ProductInstance.addProduct(req, res);
});

router.put("/products/:id", function (req, res, next) {
  ProductInstance.modifyProduct(req, res);
});

module.exports = router;
