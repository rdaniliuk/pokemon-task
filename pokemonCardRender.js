import { pokemonStatsRender } from "./pokemonStatsRender.js";
import { pokemonMovesRender } from "./pokemonMovesRender.js";

function renderTemplate(name, imageURL, info) {
  return `
      <div class="pokemon__card">
         <div class="card__header">
            <div class="card__name">
               <span>${name}</span>
            </div>
            <div class="card__type">
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

export async function pokemonCardRender(data, info) {
  const name = data.name;
  const image = data.sprites.other.home.front_default;
  const types = data.types;
  const screen = document.querySelector(".screen");
  screen.innerHTML = "";
  screen.innerHTML = renderTemplate(name, image, info );
  const typesContainer = document.querySelector('.card__type');
  types.forEach((type) => {
   const typeContainer = document.createElement('div');
   typeContainer.innerText = type.type.name;
   typeContainer.classList.add('button');
   typesContainer.append(typeContainer);
  })
  pokemonStatsRender(data);
  pokemonMovesRender(data);
}
