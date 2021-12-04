import React from 'react'
import { useParams } from "react-router-dom";
import Feedback from '../components/Feedback'
import MyFeedback from '../components/MyFeedback';
import WithAuth from '../utils/withAuth';

const FeedbackPage = () => {
    let { feedbackId } = useParams();
    return (
        <div className="mobile:h-screen mobile:overflow-y-auto">
            {(feedbackId) ? 
            (<MyFeedback  feedbackId={feedbackId}/>) : 
            (<Feedback />)
            }
        </div>
    )
}

export default WithAuth(FeedbackPage);