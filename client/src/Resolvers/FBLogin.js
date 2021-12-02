import gql from "graphql-tag";

export const FB_LOGIN = gql`
mutation AuthenticateFacebookUser($accessToken: String!,
                                    $id: String!,
                                    $name: String!,
                                    $userID: String!,
                                    $email: String!,
                                    $short_name: String!,
                                    $data_access_expiration_time: Float,
                                    $expiresIn: Float,
                                    $graphDomain: String!,
                                    $signedRequest: String) {
                                     AuthenticateFacebookUser(
                                        accessToken:$accessToken,
                                        id:$id,
                                        name:$name,
                                        userID:$userID,
                                        email: $email,
                                        short_name: $short_name,
                                        graphDomain: $graphDomain,
                                        data_access_expiration_time:$data_access_expiration_time,
                                        expiresIn:$expiresIn,
                                        signedRequest:$signedRequest )   {
                                        name
                                        id
                                        short_name
                                        accessToken
                                    }                        
}
`;