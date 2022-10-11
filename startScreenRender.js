import { renderPokemonList } from "./pokemonListRender.js";

function templateRender() {
  return `
      <div class="startScreen">
         <div class="screen__logo">
            <img src="./img/logo.png" alt="logo-image" />
         </div>
         <div class="screen__text">
            <p id="start__text">
               Hello, welcome to the Pokemon library. Explore Pokemon, their
               moves and choose your favorite!
            </p>
            <p id="hidden__text" class="hideContainer">
               Choose a Pokemon
            </p>
         </div>
         <div class="screen__button">
            <button class="showPokemonButton button" id="getPokemonList">
               Let's Start
            </button>
         </div>
      </div>
   `;
}

export function startScreenRender() {
  const screen = document.querySelector(".screen");
  const startScreen = document.createElement("div");
  startScreen.classList.add("startScreen");
  startScreen.innerHTML = templateRender();
  screen.append(startScreen);
  const getAllPock = document.querySelector("#getPokemonList");
  getAllPock.addEventListener("click", renderPokemonList);
}
