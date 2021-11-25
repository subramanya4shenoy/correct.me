import React from 'react'
import Chip from '@mui/material/Chip';
import FeedbackCard from '../Micro/FeedbackCard';

const FeedBackList = ({ selectedMenu }) => {

    return (
        <div className="w-2/3">
            <div className="flex w-full mx-auto justify-between">
                <div className="text-textCommon futuraMedium text-sm self-center opacity-75">Feedbacks {selectedMenu}</div>
                <div className="self-center">  <Chip label="4 New" color="primary" /></div>
            </div>

            <div className="mt-4 rounded-t-lg p-4 h-auto max-h-screen overflow-auto pb-72">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    )
}

export default FeedBackList