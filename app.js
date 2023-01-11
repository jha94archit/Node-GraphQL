const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(3000, () => {
    console.log('Listening for requests on http://localhost:3000');
});
