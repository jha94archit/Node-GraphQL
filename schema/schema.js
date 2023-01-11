const graphql = require('graphql');
var _ = require('lodash');

//Dummy Data
var usersData = [
    {id: '1', name: 'Bond', age: 36},
    {id: '13', name: 'Ana', age: 66},
    {id: '211', name: 'Bella', age: 16},
    {id: '19', name: 'Gina', age: 26},
    {id: '150', name: 'Georg', age: 36},
]

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql


const UserType = new graphql.GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

//RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Description",
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return _.find(usersData, {id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})