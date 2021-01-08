function checkAdmin(req, res, next) {
  if (req.user) {
    if (req.user.isAdmin) {
      console.log("el user es admin");
      next();
    } else {
      console.log("el user no es admin");
      res.sendStatus(403);
    }
  } else {
    console.log("no hay user loggeado");
    res.send(400).send("no estas loggeado");
  }
}

module.exports = checkAdmin;
