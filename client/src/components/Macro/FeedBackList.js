import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
import FeedbackCard from '../Micro/FeedbackCard';
import { GET_FEEDBACKS } from '../../Resolvers/Feedbacks';
import { useLazyQuery } from '@apollo/client';

const FeedBackList = ({selectedMenu}) => {

    const [getFeedbacks, { loading, error, data }] = useLazyQuery(GET_FEEDBACKS);

    useEffect(() => {
        console.log("menu changed");
        getFeedbacks()
    }, [selectedMenu])

    return (
        <div className="w-2/3">
            <div className="flex w-full mx-auto justify-between">
                <div className="text-textCommon futuraMedium text-sm self-center opacity-75">Feedbacks {selectedMenu}</div>
                <div className="self-center">  <Chip label="4 New" color="primary" /></div>
            </div>

            <div className="mt-4 rounded-t-lg p-4 h-auto max-h-screen overflow-auto pb-72">
                {(data) &&
                    (data.getFeedbacks.map((feedback, index) => {
                        return <FeedbackCard message={feedback.message} key={index + "_messages"} />
                    }))
                }

            </div>
        </div>
    )
}

export default FeedBackList