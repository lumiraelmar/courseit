const PokemonModel = require("../models/pokemonModel");
class PokemonService {
  addPokemon(name, image) {
    const newPokemon = new PokemonModel({ name: name.name, image: image });
    return newPokemon.save();
  }

  getPokemons() {
    const query = PokemonModel.find().exec();
    return query;
  }

  modifyPokemonByName(name, data) {
    const query = PokemonModel.findOneAndUpdate({ name: name }, data).exec();
    return query;
  }

  checkPokemon(name) {
    const query = PokemonModel.find({ name: name }, (err) => {
      if (err) {
        console.log(err);
        res.status(400);
      }
    }).exec();
    return query;
  }

  //AGREGAR CAMPO QUE SEA DISABLED TRUE
  deletePokemon(name) {
    const query = PokemonModel.findOneAndUpdate({ name: name }, { disabled: true }).exec();
    return query;
  }
}
module.exports = PokemonService;
