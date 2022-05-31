const axios = require('axios')

const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;


// A map of functions which return data for the schema.
const resolvers = {
 Query: {
  hello: async () => {
  const res = await axios('http://127.0.0.1:5000/graphQlTest')
   return res.data
  },
 },
};

const server = new ApolloServer({
 typeDefs,
 resolvers,
});

server.listen({
 host: 'localhost',
 port: 4001
}).then(({ url }) => {
 console.log(`🚀 Server ready at ${url}`);
});