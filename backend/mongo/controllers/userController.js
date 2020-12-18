class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async getUsers(req, res) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }

  async addUser(req, res) {
    const { name } = req.body;
    const { token } = req.headers;
    if (name && token == "r2d2") {
      const add = await this.userService.addUser(name);
      return res.json(add);
    } else if (token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("falta name");
    }
  }

  async modifyUser(req, res) {
    const { name, id } = req.body;
    const { token } = req.headers;
    if (name && id && token == "r2d2") {
      const modify = await this.userService.modifyUser(id, name);
      return res.json(modify);
    } else if (token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("falta name o id");
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const { token } = req.headers;
    if (id && token == "r2d2") {
      const erase = await this.userService.deleteUser(id);
      return res.json(erase);
    } else if (token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("falta id");
    }
  }
}

module.exports = UserController;
