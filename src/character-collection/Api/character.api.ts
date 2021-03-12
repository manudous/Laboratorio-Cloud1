import Axios from 'axios';
import { ApiEntity } from './character.api-model';

const characterCollection = 'https://rickandmortyapi.com/api/character';

export const getCharacterFromApi = async (): Promise<ApiEntity[]> => {
  const { data } = await Axios.get(characterCollection);
  return data.results;
};
