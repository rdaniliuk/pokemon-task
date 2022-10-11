import { renderPokemonList } from "./pokemonListRender.js";

const getAllPock = document.querySelector("#getPokemonList");
getAllPock.addEventListener("click", renderPokemonList);
