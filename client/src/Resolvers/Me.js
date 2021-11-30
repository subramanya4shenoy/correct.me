import gql from "graphql-tag";

export const ME = gql`
query me {
    me
}
`;


export const GET_USER_INFO = gql`
    query getUserWithId($id: String!) {
        getUserWithId(id: $id)
    }
`