import gql from "graphql-tag";

export const GET_FEEDBACKS = gql`
query getFeedbacks {
    getFeedbacks {
        id
        message
    }
}
`;

export const POST_FEEDBACKS = gql`
    mutation postFeedback($id:String!, $message: String!) {
        postFeedback(id: $id, message: $message)
    }
`

export const GET_FEEDBACK_WITH_ID = gql`
    query getFeedbackWithId($id:String!) {
        getFeedbackWithId(id: $id) {
            message
        }
    }
`