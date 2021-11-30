import React from 'react'
import { useParams } from 'react-router';
import GiveFeedbackCard from '../components/Micro/GiveFeedbackCard'
import { useQuery } from '@apollo/client';
import { GET_USER_INFO } from '../Resolvers/Me';

const GiveFeedback = () => {
    const { feedbackId } = useParams();

    const { loading, data } = useQuery(GET_USER_INFO, { variables: { id: feedbackId.toString() } });

    return (
        <div>
            {(!loading && data) &&
                (<>
                <div className="text-center text-textCommon text-2xl mt-20 futuraMedium">
                    Give anonymous feedback to
                    <span className="capitalize futuraBold text-primarydark"> {data.getUserWithId} </span>
                </div>
                <GiveFeedbackCard feedbackUserId={feedbackId}/>
            </>)
            }
        </div>
    )
}

export default GiveFeedback
