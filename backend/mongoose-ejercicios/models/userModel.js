const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  handler: {
    type: String,
    required: true,
  },
  password: {},
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("User", UserSchema);
