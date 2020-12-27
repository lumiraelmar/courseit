const User = require("../models/userModel");
class UserService {
  getUsers() {
    const query = User.find().exec();
    return query;
  }
  getUserById(id) {
    const query = User.find({ _id: id }).exec();
    return query;
  }
  getUserByHandler(handler) {
    const query = User.find({ handler: handler }).exec();
    return query;
  }
  addUser(data) {
    const newUser = new User(data);
    return newUser.save();
  }
}

module.exports = UserService;
