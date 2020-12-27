const ProductModel = require("../models/productModel");

class ProductService {
  getProducts(page) {
    const limit = 3;
    const offset = limit * (page - 1);
    const query = ProductModel.find().skip(offset).limit(limit).exec();
    return query;
  }
  getFreeShipping() {
    const query = ProductModel.find({ freeshipping: true }).exec();
    return query;
  }
  getProductById(id) {
    const query = ProductModel.find({ _id: id }).exec();
    return query;
  }
  addProduct(data) {
    const newProduct = new ProductModel(data);
    return newProduct.save();
  }
  modifyProduct(id, data) {
    const product = ProductModel.findOneAndUpdate({ _id: id }, data).exec();
    return product;
  }
  addDiscount() {
    const addDiscount = ProductModel.updateMany({}, { discount: 0 });
    return addDiscount;
  }
}

module.exports = ProductService;
