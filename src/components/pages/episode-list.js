import React from 'react';

import ItemListPage from '../item-list-page';
import { getEpisodesInfo, getEpisodes } from '../../queries';

const EpisodeList = () => {
  return (
    <ItemListPage 
      getInfoQuery={getEpisodesInfo} 
      getItemsQuery={getEpisodes}
      label="episodes"
    />
  );
};

export default EpisodeList;

