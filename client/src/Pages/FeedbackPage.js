import React from 'react'
import { useParams } from "react-router-dom";
import Feedback from '../components/Feedback'
import WithAuth from '../utils/withAuth';

const FeedbackPage = () => {
    let { feedbackId } = useParams();
    return (
        <Feedback feedbackId={feedbackId}/>
    )
}

export default WithAuth(FeedbackPage);
