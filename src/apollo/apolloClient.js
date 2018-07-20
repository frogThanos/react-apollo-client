import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4040/graphql',
  credentials: 'same-origin',
});


export default client;
