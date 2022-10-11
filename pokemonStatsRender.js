function renderTemplate () {
  return `
      <div class="card__header">
      <div class="card__name">
         <span>Base Stats</span>
      </div>
      </div>
      <div class="card__stats">
      </div>
      `;
}

function statTemplate (name, point) {
  return `
      <div class="stat__name ">
         <span>${name}</span>
      </div>
      <input type="range" disabled class="stat__range" value='${point}'></input>
      <div class="stat__point">
         <span>${point}</span>
      </div>
       `;
}

export function pokemonStatsRender (data) {
  const screen = document.querySelector('.screen');
  const statsCard = document.createElement('div');
  statsCard.classList.add('pokemon__stats');
  screen.append(statsCard);
  statsCard.innerHTML = renderTemplate();
  const statsContainer = document.querySelector('.card__stats');
  const stats = data.stats;
  stats.forEach((stat) => {
    const statPoint = stat.base_stat;
    const statName = stat.stat.name;
    const statWrapper = document.createElement('div');
    statWrapper.classList.add('stat__wrapper');
    statWrapper.innerHTML = statTemplate(statName, statPoint);
    statsContainer.append(statWrapper);
  });
}
