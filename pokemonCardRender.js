import PokemonAPI from "./PokemonAPI.js";

function renderTemplate(name, imageURL, info) {
  return `
      <div class="pokemon__card">
         <div class="card__header">
            <div class="card__name">
               <span>${name}</span>
            </div>
            <div class="card__button">
               <button class="button">hi</button>
               <button class="button">by</button>
            </div>
         </div>
         <div class="card__main">
            <div class="card__image">
               <img src="${imageURL}" alt="card-image">
            </div>
            <div class="card__text">
               <p>${info}</p>
            </div>
         </div>
      </div>
      `;
}

export async function pokemonCardRender(id) {
  const pokemonAPI = new PokemonAPI();
  const [data, info] = await pokemonAPI.getPok(id);
  const name = data.name;
  const image = data.sprites.other.home.front_default;
  const screen = document.querySelector('.screen');
  screen.innerHTML = '';
  screen.innerHTML = renderTemplate(name, image, info);
}

