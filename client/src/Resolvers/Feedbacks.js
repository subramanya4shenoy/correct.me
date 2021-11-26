import gql from "graphql-tag";

export const GET_FEEDBACKS = gql`
query getFeedbacks($type: String!) {
    getFeedbacks(type: $type) {
        message
    }
}
`;