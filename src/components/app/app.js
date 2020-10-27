import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import {
  CharacterList,
  Character,
  EpisodeList,
  Episode,
  LocationList,
  Location,
} from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {

  return (
    <>
      <Header /> 

      <Route path="/characters/" exact component={CharacterList} />
      <Route path="/characters/:id" component={Character} />
      <Route path="/episodes/" exact component={EpisodeList} />
      <Route path="/episodes/:id" component={Episode} />
      <Route path="/locations/" exact component={LocationList} />
      <Route path="/locations/:id" component={Location} />
    </>
  );
}

export default App;

