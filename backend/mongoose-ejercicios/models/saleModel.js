const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  product: {},
  handler: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Sale", SaleSchema);
