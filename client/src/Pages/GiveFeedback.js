import React from 'react'
import { useParams } from 'react-router';
import GiveFeedbackCard from '../components/Micro/GiveFeedbackCard'

const GiveFeedback = () => {
    const { feedbackId } = useParams();

    return (
        <div>
            <div className="text-center text-textCommon text-2xl mt-20 futuraMedium">
                Give anonymous feedback to
                <span className="capitalize futuraBold text-primarydark"> {feedbackId} </span>
            </div>
            <GiveFeedbackCard />
        </div>
    )
}

export default GiveFeedback
