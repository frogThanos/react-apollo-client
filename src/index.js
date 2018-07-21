import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import MainRouter from './router/MainRouter';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo/apolloClient';

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainRouter />
  </ApolloProvider>, document.getElementById('root'),
);
registerServiceWorker();
