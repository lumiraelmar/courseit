const axios = require("axios");

class UserController {
  constructor() {
    this.names = [];
  }

  getUser(req, res) {
    res.send(this.names);
  }

  postUser(req, res) {
    const { body, headers } = req;
    if (body.name && headers.token == "r2d2") {
      this.names.push(body.name);
      res.status(200).send("usuario creado correctamente");
    } else if (headers.token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("falta name");
    }
  }

  modifyUser(req, res) {
    const { body, headers } = req;
    const { name, i } = body;
    if (name && i && headers.token == "r2d2") {
      this.names.splice(i, 1, name);
      res.status(200).send("usuario modificado correctamente");
    } else if (headers.token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("no hay nada para modificar");
    }
  }

  deleteUser(req, res) {
    const { body, headers, params } = req;
    if (body.name && params.index && headers.token == "r2d2") {
      this.names.splice(params.index, 1);
      res.status(200).send("usuario eliminado correctamente");
    } else if (headers.token != "r2d2") {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("no hay nada para borrar");
    }
  }
}

module.exports = UserController;
