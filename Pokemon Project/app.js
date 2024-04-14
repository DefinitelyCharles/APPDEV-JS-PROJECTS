const sectionCenter = document.querySelector('.section-center');
const primaryTypeSelect = document.getElementById('primary_type_select');
const secondaryTypeSelect = document.getElementById('secondary_type_select');

window.addEventListener('DOMContentLoaded', async () => {
  const pokemonUrls = Array.from({ length: 905 }, (_, index) => `https://pokeapi.co/api/v2/pokemon/${index + 1}`);
  await fetchAndDisplayPokemonData(pokemonUrls);
});

primaryTypeSelect.addEventListener('change', () => {
  filterPokemons();
});

secondaryTypeSelect.addEventListener('change', () => {
  filterPokemons();
});

const fetchAndDisplayPokemonData = async (urls) => {
  try {
    const pokemonData = await Promise.all(urls.map(url => fetchPokemonData(url)));
    const pokemonHTML = pokemonData.map(pokemon => createPokemonHTML(pokemon)).join('');
    sectionCenter.innerHTML = pokemonHTML;
  } catch (error) {
    console.log('Error fetching Pokemon data:', error);
  }
};

const fetchPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching Pokemon data:', error);
    throw error;
  }
};

const createPokemonHTML = (pokemon) => {
  return `
    <article class="menu-item ${pokemon.types.map(type => type.type.name).join(' ')} secondary-${pokemon.types.length > 1 ? pokemon.types[1].type.name : 'none'}">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="photo">
      <div class="item-info">
        <p class="item-text">Pokédex ID: ${pokemon.id}</p>
        <header style="color:#fff;">
          <h4>${pokemon.name}</h4>
        </header>
        <p class="item-text">
          <u>Pokemon Type</u>: ${pokemon.types.map(type => type.type.name).join(', ')}
        </p>
      </div>
    </article>`;
};

const filterPokemons = () => {
  const selectedType = primaryTypeSelect.value;
  let selectedSecondaryType = secondaryTypeSelect.value;

  const pokemons = document.querySelectorAll('.menu-item');
  pokemons.forEach(pokemon => {
    const types = pokemon.classList;
    const secondaryType = pokemon.classList.contains(`secondary-${selectedSecondaryType}`);

    if (selectedSecondaryType === 'all') {
      secondaryTypeSelect.selectedIndex = 0;
      selectedSecondaryType = '';
    }

    if (selectedType === 'all' || selectedSecondaryType === 'all') {
      pokemon.style.display = 'block';
      return;
    }

    if (selectedSecondaryType === '') {
      if (types.contains(selectedType)) {
        pokemon.style.display = 'block';
      } else {
        pokemon.style.display = 'none';
      }
      return;
    }

    if (selectedType !== 'all' && selectedSecondaryType === 'all') {
      if (types.contains(selectedType)) {
        pokemon.style.display = 'block';
      } else {
        pokemon.style.display = 'none';
      }
      return;
    }

    if (
      (selectedType === 'all' || types.contains(selectedType)) &&
      (selectedSecondaryType === 'all' || secondaryType)
    ) {
      pokemon.style.display = 'block';
    } else {
      pokemon.style.display = 'none';
    }
  });
};
