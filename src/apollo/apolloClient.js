import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: `${process.env.GRPAPHQLURI}`,
});


export default client;