const UserModel = require("../models/userModel");
class UserService {
  getUsers() {
    const query = UserModel.find().exec();
    return query;
  }

  addUser(data) {
    const newUser = new UserModel({ name: data });
    return newUser.save();
  }

  modifyUser(id, name) {
    const user = UserModel.findOneAndUpdate({ _id: id }, { name: name }).exec();
    return user;
  }

  deleteUser(id) {
    const query = UserModel.deleteOne({ _id: id }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    return query;
  }
}
module.exports = UserService;
