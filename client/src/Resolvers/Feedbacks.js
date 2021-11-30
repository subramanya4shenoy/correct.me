import gql from "graphql-tag";

export const GET_FEEDBACKS = gql`
query getFeedbacks {
    getFeedbacks {
        message
    }
}
`;

export const POST_FEEDBACKS = gql`
    mutation postFeedback($id:String!, $message: String!) {
        postFeedback(id: $id, message: $message)
    }
`