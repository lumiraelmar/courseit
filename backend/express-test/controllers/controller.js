class UserController {
  getName(req, res) {
    res.send(`mi nombre es ${req.params.name} y mi edad es ${req.query.edad}`);
  }

  getNum(req, res) {
    const num = req.params.num;
    const multiplicacion = num * 2;
    res.send(`${num} multiplicado por 2 es: ${multiplicacion}`);
  }

  getPalindromo(req, res) {
    const str = req.params.str;
    const reverse = str.split("").reverse().join("");
    reverse == str
      ? res.send(`La frase ${str} es un palíndromo ya que al revés se lee: ${reverse}.`)
      : res.send(`La frase ${str} NO es un palíndromo ya que al revés se lee: ${reverse}.`);
  }
}

module.exports = UserController;
