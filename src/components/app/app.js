import React from 'react';

import { ProvideAuth } from '../../hooks';
import Header from '../header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  return (
    <ProvideAuth>
      <Header /> 
    </ProvideAuth>
  );
}

export default App;

