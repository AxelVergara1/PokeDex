import {pokeApi} from '../../config/api/pokeApi';
import {PokeAPIPaginatedResponse} from '../../infraestructure/interfaces/pokeapi.interfaces';

export const getPokemonNamesWithId = async () => {
  const url = `pokemon?limit=1025`;
  const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

  return data.results.map(info => ({
    id: Number(info.url.split('/')[6]), //corta el sexto slash del url
    name: info.name,
  }));
};
