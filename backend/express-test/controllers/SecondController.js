const axios = require("axios");

class SecondController {
  //ejercicio 0
  getPrimos(req, res) {
    const primos = [];
    let numero = 150;

    function isPrime(num) {
      if (num < 2) return false;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
      }
      return true;
    }

    for (var i = 0; i < numero; i++) {
      if (isPrime(i)) {
        primos.push(i);
      }
    }

    const primosInfo = {
      cantidad: primos.length,
      lista: primos,
    };
    res.json(primosInfo);
  }

  //ejercicio 1
  async getUser(req, res) {
    const user = req.params.id;
    const data = await axios.get(`https://api.github.com/users/${user}`);
    res.json(data.data);
  }

  //ejercicio 2 y 3
  async getUser2(req, res) {
    const user = req.params.id;
    const data = await axios.get(`https://api.github.com/users/${user}`);
    const { name, company, bio } = data.data;
    const modeledData = {
      nombre: name,
      empresa: company,
      bio: bio,
    };
    res.json({ ...modeledData, edad: 23, helado: "menta granizada" });
  }

  //ejercicio 4
  async getPokemonesPrimos(req, res) {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    const pokemones = data.data.results;
    const primos = [];

    function isPrime(num) {
      if (num < 2) return false;
      for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
      }
      return true;
    }

    for (var i = 0; i < 150; i++) {
      if (isPrime(i)) {
        primos.push(i);
      }
    }

    let pokemonesPrimos = primos.map((num) => {
      return {
        numero: num,
        pokemon: pokemones[num - 1].name,
      };
    });

    res.send(pokemonesPrimos);
  }
}

module.exports = SecondController;
