const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  type: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
