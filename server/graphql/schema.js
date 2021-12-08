const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Feedback {
    id: String!
    message: String!
  }

  type User {
    name: String!
    id: String!
    short_name: String!
    accessToken: String!
  }

  input ProfileObject {
    email: String!
    familyName: String!
    givenName: String!
    googleId: String!
    imageUrl: String!
    name: String!
  }

  type ProfileObj {
    email: String!
    familyName: String!
    givenName: String!
    googleId: String!
    imageUrl: String!
    name: String!
  }

  type GoogleUser {
    accessToken: String!
    googleId: String!
    profileObj: ProfileObj!
  }

  type UserAuth {
    accessToken: String!
    id: String!
    name: String!
    userID: String!
    graphDomain: String
    data_access_expiration_time: Float
    expiresIn: Float
    signedRequest: String
  }

  #queries
  type Query {
    getFeedbacks: [Feedback!]!
    getShareLink: String!
    me: Boolean!
    getUserWithId(id: String!): String!
    getFeedbackWithId(id: String!): Feedback!
  }

  #Mutaions
  type Mutation {
    postFeedback(id: String!, message: String!): Boolean!
    deleteFeedback(id: ID!): Boolean!
    AuthenticateFacebookUser(
      accessToken: String!
      id: String!
      name: String!
      userID: String!
      email: String!
      short_name: String!
      graphDomain: String!
      data_access_expiration_time: Float
      expiresIn: Float
      signedRequest: String
    ): User!
    AuthenticateGoogleUser(
      accessToken: String!
      googleId: String!
      profileObj: ProfileObject!
    ): User!
  }
`;

module.exports = { typeDefs };
