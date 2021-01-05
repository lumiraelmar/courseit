class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUserByName(req, res) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }
}

module.exports = UserController;
