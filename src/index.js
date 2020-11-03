import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from '@apollo/client';

import { ProvideAuth } from './hooks';
import App from './components/app';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ProvideAuth>
      <Router basename="/">
        <App />
      </Router>
    </ProvideAuth>
  </ApolloProvider>,
  document.getElementById('root')
);

