const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/schema');

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/gql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/gql to run queries!');
});