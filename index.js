const { ApolloServer, gql } = require('apollo-server');



const students=[
    {
        "id":1,
        "name": "Saad",
        "email": "saad.shahid@outlook.com",
        "age": 21
    },
    {
        "id":2,
        "name": "Ali",
        "email": "ali@outlook.com",
        "age": 25
    },
    {
        "id":3,
        "name": "Saad",
        "email": "aamir@outlook.com",
        "age": 24
    },
    {
        "id":4,
        "name": "Saad",
        "email": "bashir@outlook.com",
        "age": 22
    },
    {
        "name": "Saad",
        "email": "aamir@outlook.com",
        "age": 23
    }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves students from the "student" array above.
const resolvers = {
    Query: {
      students: () => students,
    },
  };

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Student" type defines the queryable fields for every book in our data source.
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "Student" query returns an array of zero or more Student (defined above).
  type Query {
    students: [Student]
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});