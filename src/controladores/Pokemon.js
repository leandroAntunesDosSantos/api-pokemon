const { todo } = require("node:test");
const { listarPokemons, detalharPokemon } = require("utils-playground");

let pagina = 1;

const verificarPokemons = async (req, res) => {
  const todos = await listarPokemons(pagina);
  res.status(200).json(todos.results);
  pagina++;
};

const pegarPokemons = async (req, res) => {
  const { id } = req.params;
  const unico = await detalharPokemon(id);
  res.status(200).json(unico);
};

module.exports = {
  verificarPokemons,
  pegarPokemons,
};
