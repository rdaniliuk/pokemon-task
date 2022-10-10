export default class PokAPI {
   constructor() {
      this.baseUrl = "https://pokeapi.co/api/v2/pokemon/";
   }


   async getAllPokemon() {
      const response = await fetch(`${this.baseUrl}`);
      const pokemonList = (await response.json()).results;
      return pokemonList;
   }
   async getPok() {
      const response = await fetch(`${this.baseUrl}`);
      const pockList = await response.json();
      console.log(pockList);
   }
}