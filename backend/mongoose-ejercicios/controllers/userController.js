class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }
  async getUserById(req, res) {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    return res.json(user);
  }
  async getUserByHandler(req, res) {
    const { handler } = req.params;
    const user = await this.userService.getUserByHandler(handler);
    return res.json(user);
  }
  async addUser(req, res) {
    const { body } = req;
    await this.userService.addUser(body);
    return res.send("usuario agregado");
  }
}

module.exports = UserController;
