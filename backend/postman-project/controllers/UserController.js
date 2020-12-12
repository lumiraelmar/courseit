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
    if (body.name && headers.token) {
      this.names.push(body.name);
      res.status(200).send("usuario creado correctamente");
    } else {
      res.status(400).send("falta name");
    }
  }

  modifyUser(req, res) {
    const { body, headers } = req;
    const { name, i } = body;
    console.log(headers);
    if (name && i && headers.token) {
      this.names.splice(i, 1, name);
      res.status(200).send("usuario creado correctamente");
    } else if (headers.token == null) {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("no hay nada para borrar");
    }
  }

  deleteUser(req, res) {
    const { body, headers, params } = req;
    if (body.name && params.index && headers.token) {
      this.names.splice(params.index, 1);
      res.status(200).send("usuario creado correctamente");
    } else if (headers.token == null) {
      res.status(401).send("falta token");
    } else {
      res.status(400).send("no hay nada para borrar");
    }
  }
}

module.exports = UserController;
