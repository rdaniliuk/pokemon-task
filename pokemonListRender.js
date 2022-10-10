import PokemonAPI from "./PokemonAPI.js";

function renderTemplate(name, id) {
   return `
         <a href="#" id="${id}">${name}</a>
      `
}

export async function renderPokemonList() {
   const pokemonAPI = new PokemonAPI();
   const pokemonList = await pokemonAPI.getAllPokemon();
   const nav = document.getElementById('nav');
   const pokemonListWrapper = document.createElement('div');
   pokemonListWrapper.classList.add('pokemon_list');
   nav.append(pokemonListWrapper)
   pokemonList.forEach((pok) => {
      const { name, url } = pok;
      const pokemonSplitUrl = (url.split('/'));
      const pokemonId = pokemonSplitUrl[pokemonSplitUrl.length - 2];
      const pokemonWrapper = document.createElement('div');
      pokemonWrapper.classList.add('button');
      pokemonWrapper.innerHTML = renderTemplate(name , pokemonId);
      pokemonListWrapper.append(pokemonWrapper);
   })
   const showPokemonButton = document.querySelector("#getPokemonList");
   showPokemonButton.classList.add('hideButton');
}