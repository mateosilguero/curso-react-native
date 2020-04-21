import Pokedex from 'pokedex-promise-v2';

const getPokemonImage = (index) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;

export const Pokemon = (p) => {
  const id = p.id.toString().padStart(3, '0');
  return {
    ...p,
    id,
    image: getPokemonImage(id),
  };
};

export default new Pokedex();
