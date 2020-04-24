import Pokedex from 'pokedex-promise-v2';

const getPokemonImage = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

export const Pokemon = (pokemon) => {
  const id = pokemon.id.toString().padStart(3, '0');
  return {
    ...pokemon,
    id,
    image: getPokemonImage(id),
  };
};

export default new Pokedex();
