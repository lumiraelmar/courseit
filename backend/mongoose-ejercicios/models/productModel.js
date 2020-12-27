const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  freeshipping: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
