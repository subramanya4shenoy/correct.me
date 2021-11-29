const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Feedback {
     message: String!
    }

    type User {
        name: String!
        id: String!
        accessToken: String!
    }

    type UserAuth {
        accessToken: String!
        id: String!
        name: String!
        userID: String!
        graphDomain: String,
        data_access_expiration_time: Float
        expiresIn: Float
        signedRequest: String
    }

    #queries
    type Query {
        getFeedbacks: [Feedback!]!
        getShareLink: String!
    }

    #Mutaions
    type Mutation {
        postFeedback(id: String!, message: String!): Boolean!
        deleteFeedback(id:ID!): Boolean!
        AuthenticateFacebookUser(accessToken: String!,
                                id: String!,
                                name: String!,
                                userID: String!,
                                graphDomain: String!,
                                data_access_expiration_time: Float,
                                expiresIn: Float,
                                signedRequest: String): User!
     }
`

module.exports = { typeDefs };