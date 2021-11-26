const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type GivenFeedBack {
        feedbacks: [Feedback]
        user:User
    }

    type Feedback {
     message: String!
    }

    type User {
        name: String!
        profilePic: String!
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
        getAllFeedbacks: [Feedback!]!
        getAllGivenFeedbacks: [GivenFeedBack!]!
    }

    #Mutaions
    type Mutation {
        postFeedback(message: String!): Feedback!
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