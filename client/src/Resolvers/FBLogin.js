import gql from "graphql-tag";

export const FB_LOGIN = gql`
mutation AuthenticateFacebookUser($accessToken: String!,
                                    $id: String!,
                                    $name: String!,
                                    $userID: String!,
                                    $data_access_expiration_time: Float,
                                    $expiresIn: Float,
                                    $graphDomain: String!,
                                    $signedRequest: String) {
                                     AuthenticateFacebookUser(
                                        accessToken:$accessToken,
                                        id:$id,
                                        name:$name,
                                        userID:$userID,
                                        graphDomain: $graphDomain,
                                        data_access_expiration_time:$data_access_expiration_time,
                                        expiresIn:$expiresIn,
                                        signedRequest:$signedRequest )   {
                                        name
                                        accessToken
                                    }                        
}
`;