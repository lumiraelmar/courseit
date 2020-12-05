const axios = require("axios");

class FirstController {
  //ejercicio 3
  getName(req, res) {
    res.send(`mi nombre es ${req.params.name} y mi edad es ${req.query.edad}`);
  }

  //ejercicio 4
  getNum(req, res) {
    const num = req.params.num;
    const multiplicacion = num * 2;
    res.send(`${num} multiplicado por 2 es: ${multiplicacion}`);
  }

  //ejercicio 5
  getPalindromo(req, res) {
    const str = req.params.str;
    const reverse = str.split("").reverse().join("");
    reverse == str
      ? res.send(`La frase ${str} es un palíndromo ya que al revés se lee: ${reverse}.`)
      : res.send(`La frase ${str} NO es un palíndromo ya que al revés se lee: ${reverse}.`);
  }
}

module.exports = FirstController;
