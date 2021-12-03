import React from 'react'
import { useParams } from "react-router-dom";
import Feedback from '../components/Feedback'
import WithAuth from '../utils/withAuth';

const FeedbackPage = () => {
    let { feedbackId } = useParams();
    return (
        <div className="mobile:h-screen mobile:overflow-y-auto">
            <Feedback feedbackId={feedbackId}/>
        </div>
    )
}

export default WithAuth(FeedbackPage);
