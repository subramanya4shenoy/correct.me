import React from 'react'
import { useParams } from "react-router-dom";

const FeedbackPage = () => {
    let { feedbackId } = useParams();
    return <h2>Feedbackscreen - {feedbackId}</h2>;
}

export default FeedbackPage
