const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType(
    {
        name: "Book",
        fields: () => ({
            id: { type: GraphQLString },
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
            args: {id: {type:GraphQLString}},
            resolve(parent, args) {
                // get data from db
            }
        }
    }
})