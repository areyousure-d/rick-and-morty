import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  CharacterList,
  Character,
  EpisodeList,
  Episode,
  LocationList,
  Location,
  Error404,
  Home,
} from '../pages';
import PrivateRoute from '../private-route';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/characters/" exact component={CharacterList} />
      <PrivateRoute path="/characters/:id" component={Character} />
      <PrivateRoute path="/episodes/" exact component={EpisodeList} />
      <PrivateRoute path="/episodes/:id" component={Episode} />
      <PrivateRoute path="/locations/" exact component={LocationList} />
      <PrivateRoute path="/locations/:id" component={Location} />
      <Route path="/login" />
        <Route path="/signup" />
      <Route component={Error404} />
    </Switch>
  );
};

export default MainRouter;

