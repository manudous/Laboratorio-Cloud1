import * as apiModel from './Api/character.api-model';
import * as viewModel from './character.collection.vm';

export const mapFromCharacterApiCollecionToVm = (
  characters: apiModel.ApiEntity[]
): viewModel.CharacterEntityVm[] => {
  return characters.map((character) => mapFromCharacterApiToVm(character));
};

const mapFromCharacterApiToVm = (
  character: apiModel.ApiEntity
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  gender: character.gender,
  species: character.species
});
