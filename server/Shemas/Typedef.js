const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Feedback {
     message: String!
    }

    #queries
    type Query {
        getAllFeedBacks: [Feedback!]!
    }

    #Mutaions

`

module.exports =  { typeDefs };