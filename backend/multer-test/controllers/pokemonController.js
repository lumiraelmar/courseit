const axios = require("axios");

class PokemonController {
  constructor(pokemonService) {
    this.pokemonService = pokemonService;
  }

  async addPokemon(req, res) {
    const { body } = req;
    const { filename } = req.file;

    //chequear si existe el pokemon en la api
    const pokeapi = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${body.name}`)
      .catch(function (error) {
        console.log(`que onda bro soy un ${error}`);
      });
    //si el nombre de pokemon existe
    if (pokeapi != undefined) {
      try {
        await this.pokemonService.addPokemon(body, filename);
        res.status(200).json("pokemon creado correctamente");
      } catch (err) {
        console.log(err);
        res.status(500).json("problema en la creacion del pokemon");
      }
    } else {
      res.status(404).send("el pokemon ingresado no existe");
    }
  }

  async getPokemons(req, res) {
    const users = await this.pokemonService.getPokemons();
    return res.json(users);
  }

  async modifyPokemonByName(req, res) {
    const { params } = req;

    //chequear si existe en la db
    const pokemonCheck = await this.pokemonService.checkPokemon(params.name);

    if (pokemonCheck != "") {
      const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      const { id, height, weight, types } = pokeapi.data;

      const pokemonData = {
        id: id,
        height: height,
        weight: weight,
        type: types[0].type.name,
      };

      try {
        await this.pokemonService.modifyPokemonByName(params.name, pokemonData);
        res.status(200).json("pokemon modificado correctamente");
      } catch (err) {
        console.log(err);
        res.status(500).json("problema en la modificacion");
      }
    } else {
      res.status(404).json("el pokemon no esta guardado, intenta agregandolo primero");
    }
  }

  async deletePokemon(req, res) {
    const { name } = req.params;

    //chequear si existe en la db
    const pokemonCheck = await this.pokemonService.checkPokemon(name);

    if (pokemonCheck != "") {
      try {
        await this.pokemonService.deletePokemon(name);
        res.status(200).json("pokemon disabled correctly");
      } catch (err) {
        res.status(500).json("problema");
      }
    } else {
      res.status(404).json("el pokemon no esta guardado, intenta agregandolo primero");
    }
  }
}

module.exports = PokemonController;
