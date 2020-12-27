const Sale = require("../models/saleModel");
class SaleService {
  getSales() {
    const query = Sale.find().exec();
    return query;
  }
  getSaleById(id) {
    const query = Sale.find({ _id: id }).exec();
    return query;
  }
  getSaleByHandler(handler) {
    const query = Sale.find({ handler: handler }).exec();
    return query;
  }
  addSale(data) {
    const newSale = new Sale(data);
    return newSale.save();
  }
}

module.exports = SaleService;
