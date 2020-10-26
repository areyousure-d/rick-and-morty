import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import CharacterList from '../character-list';
import Character from '../character';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';



const App = () => {

  return (
    <>
      <Header /> 
      <Route path="/characters/" exact component={CharacterList} />
      <Route path="/characters/:id" component={Character} />
    </>
  );
}

export default App;

