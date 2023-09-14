const express = require("express");
const { verificarPokemons, pegarPokemons } = require("./controladores/Pokemon");
const { detalharPokemon } = require("utils-playground");

const app = express();

app.get("/", verificarPokemons);

app.get("/:id", pegarPokemons);

app.listen(3000);
