import React from 'react';

import ItemListPage from '../item-list-page';
import { getCharactersInfo, getCharacters } from '../../queries';

const CharacterList = () => {
  
  return (
    <ItemListPage
      label="characters"
      getInfoQuery={getCharactersInfo}
      getItemsQuery={getCharacters}
    />
  );
};

export default CharacterList;

