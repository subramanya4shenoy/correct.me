const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type GivenFeedBack {
        feedbacks: [Feedback],
        user:User
    }

    type Feedback {
     message: String!
    }

    type User {
        name: String!
        profilePic: String!
    }

    #queries
    type Query {
        getAllFeedbacks: [Feedback!]!
        getAllGivenFeedbacks: [GivenFeedBack!]!
    }

    #Mutaions
    type Mutation {
        postFeedback(message: String!): Feedback!
        deleteFeedback(id:ID!): Boolean!
     }
`

module.exports = { typeDefs };