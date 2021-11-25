import React from 'react'
import { useParams } from "react-router-dom";
import Feedback from '../components/Feedback'

const FeedbackPage = () => {
    let { feedbackId } = useParams();
    return (
        <Feedback feedbackId={feedbackId}/>
    )
}

export default FeedbackPage
