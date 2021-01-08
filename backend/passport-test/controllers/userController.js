class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUser(req, res) {
    const { body } = req;
    const name = body.name.toLowerCase();

    if (body && body.name && body.password) {
      try {
        await this.userService.createUser({ ...body, name });
        res.status(200).send("hola");
      } catch (err) {
        console.log(err);
      }
    } else {
      res.sendStatus(400);
    }
  }
}

module.exports = UserController;
