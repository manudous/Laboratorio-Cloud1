import Axios from 'axios';
import { characterApiEntity } from './character.api-model';

export const getCharacterFromApi = async (
  id: string
): Promise<characterApiEntity> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const { data } = await Axios.get(url);
  return data;
};
