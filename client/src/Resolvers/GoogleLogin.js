import gql from 'graphql-tag';

export const GOOGLE_LOGIN = gql`
  mutation AuthenticateGoogleUser(
    $accessToken: String!
    $googleId: String!
    $profileObj: ProfileObject!
  ) {
    AuthenticateGoogleUser(
      accessToken: $accessToken
      googleId: $googleId
      profileObj: $profileObj
    ) {
      accessToken
      id
      short_name
      name
    }
  }
`;
