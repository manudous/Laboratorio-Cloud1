import * as React from 'react';
import { getCharacterFromApi } from './Api/character.api';
import { CharacterEntityVm } from './character.collection.vm';
import { mapFromCharacterApiCollecionToVm } from './character.collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterFromApi().then((character) => {
      setCharacterCollection(mapFromCharacterApiCollecionToVm(character));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
