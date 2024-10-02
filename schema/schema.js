const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString } = graphql;

const Book = new GraphQLObjectType(
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