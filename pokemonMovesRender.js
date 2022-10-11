import PokemonAPI from "./PokemonAPI.js";

const pokemonAPI = new PokemonAPI();

function templateRender(
  moveClass,
  moveType,
  movePp,
  movePower,
  moveAccuracy,
  moveLvl,
  moveName
) {
  return `
      <div class="move__level">
        <span>Level</span>
        <p>${moveLvl}</p>
      </div>
      <div class="move__main">
        <div class="move__name">
          <span>${moveName}</span>
        </div>
        <div class="move__button">
          <div class="move__type">
            <span class="button">${moveType}</span>
          </div>
          <div class="move__class">
            <span class="button">${moveClass}</span>
          </div>
        </div>
      </div>
      <div class="move__stats">
        <div class="move__pp">
          <span>${movePp}</span>
          <span>pp</span>
        </div>
        <div class="move__power">
          <span>${movePower}</span>
          <span>power</span>
        </div>
        <div class="move__accuracy">
          <span>${moveAccuracy}</span>
          <span>accuracy</span>
        </div>
      </div>
  `;
}

export async function pokemonMovesRender(data) {
  let moves = data.moves;
  if (moves.length >= 4) {
    const learnedMoves = moves.filter((move) => {
      return move.version_group_details[0].level_learned_at > 0;
    });
    learnedMoves.sort(() => Math.random() - 0.5);
    moves = learnedMoves.slice(0, 4);
  }
  const movesLvl = [];
  const movesLink = [];
  const movesName = [];
  moves.forEach((move) => {
    movesName.push(move.move.name);
    movesLink.push(move.move.url);
    movesLvl.push(move.version_group_details[0].level_learned_at);
  });
  const moveData = await pokemonAPI.getMove(movesLink);
  const screen = document.querySelector(".screen");
  const movesWrapper = document.createElement("div");
  movesWrapper.classList.add("pokemon__moves");
  screen.append(movesWrapper);
  moveData.forEach((move, index) => {
    const [
      moveClass,
      moveType,
      movePp,
      movePower,
      moveAccuracy,
      moveLvl,
      moveName,
    ] = [
      move.damage_class.name,
      move.type.name,
      move.pp,
      move.power,
      move.accuracy,
      movesLvl[index],
      movesName[index],
    ];
    const moveWrapper = document.createElement("div");
    moveWrapper.classList.add("move__wrapper");
    moveWrapper.innerHTML = templateRender(
      moveClass,
      moveType,
      movePp,
      movePower,
      moveAccuracy,
      moveLvl,
      moveName
    );
    movesWrapper.append(moveWrapper);
  });
}
