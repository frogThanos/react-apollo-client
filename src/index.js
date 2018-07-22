import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import MainRouter from './router/MainRouter';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo/apolloClient';
import withSession from './components/auth/withSession';

const MainRouterWithSession = withSession(MainRouter);

ReactDOM.render(
  <ApolloProvider client={client}>
    <MainRouterWithSession />
  </ApolloProvider>, document.getElementById('root'),
);
registerServiceWorker();
