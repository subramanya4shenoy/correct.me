import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
import FeedbackCard from '../Micro/FeedbackCard';
import { GET_FEEDBACKS } from '../../Resolvers/Feedbacks';
import { useLazyQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import refresh from '../../assets/images/refresh.svg';
import { ZeroState } from '../Micro/ZeroState';

const FeedBackList = () => {

    const [getFeedbacks, { loading, error, data }] = useLazyQuery(GET_FEEDBACKS, { fetchPolicy: 'network-only' });

    useEffect(() => {
        console.log("menu changed");
        getFeedbacks()
    }, [])

    return (
        <div className="w-full">
            <div className="flex w-full mx-auto justify-between mobile:px-4 mobile:w-screen mobile:bg-body mobile:top-0 mobile:z-20 mobile:sticky mobile:py-4">
                <div className="text-textCommon futuraMedium text-sm self-center opacity-75">Feedbacks Received</div>
                <div className="self-center">
                    <Button variant="text" onClick={(e) => { getFeedbacks() }}>
                        <img className="mr-2 text-pr w-5" src={refresh} alt="refresh" />
                        Refresh
                    </Button>
                </div>
            </div>

            <div className="mt-4 rounded-t-lg p-4 h-auto desktop:max-h-screen overflow-auto pb-72
                            mobile:mt-0 mobile:pt-2 mobile:h-auto mobile:overflow-visible">
                {(!loading && data) &&
                    (data.getFeedbacks.length === 0) ?
                    (<ZeroState message="Nothing yet! Please share your link." />) :
                    (  (data) &&
                        (data.getFeedbacks.map((feedback, index) => {
                            return <FeedbackCard message={feedback.message} key={index + "_messages"} />
                        }))
                    )
                }
            </div>
        </div>
    )
}

export default FeedBackList