import React from 'react';

import ItemListPage from '../item-list-page';
import { getLocationsInfo, getLocations } from '../../queries';

const LocationList = () => {
  return (
    <ItemListPage 
      getInfoQuery={getLocationsInfo} 
      getItemsQuery={getLocations}
      label="locations"
    />
  );
};

export default LocationList;

