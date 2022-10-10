export default class PokAPI {
  constructor() {
    this.baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    this.urlForInfo = "https://pokeapi.co/api/v2/pokemon-species/";
  }

  async getAllPokemon() {
    const response = await fetch(`${this.baseUrl}`);
    const pokemonList = (await response.json()).results;
    return pokemonList;
  }
  async getPok(id) {
    const response = await Promise.all([
      fetch(`${this.baseUrl}${id}`).then((res) => res.json()),
      fetch(`${this.urlForInfo}${id}`).then((res) => res.json()),
    ]);
    const [ data, info ] = response;
    return [ data, info.flavor_text_entries[6].flavor_text ];
  }
}
