const graphql = require("graphql")
const _ = require("lodash")
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

// dummy data
var book = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];
const BookType = new GraphQLObjectType(
    {
        name: "Book",
        fields: () => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        }),
        description: "schema for a book"
    }
)

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType", 
    fields: {
        book: {
            type: BookType,
            args: {id: {type:GraphQLID}},
            resolve(parent, args) {
                return _.find(book, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})