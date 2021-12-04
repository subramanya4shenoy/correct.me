import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_FEEDBACK_WITH_ID } from '../Resolvers/Feedbacks'
import cactus from '../assets/images/cactus.svg';
import Logo from './Micro/Logo';

const MyFeedback = ({feedbackId}) => {

    const { data, loading, error } = useQuery(GET_FEEDBACK_WITH_ID, {variables: {id: feedbackId}});

    return (
        <div className="px-10  h-screen overflow-auto mobile:px-4">
        <Logo/>
        {   (!loading && data) && 
            (<div className="flex mx-auto w-full justify-center px-20 overflow-auto pb-24 mobile:flex-wrap mobile:px-10">
                <div className="h-24 no-shrink flex-shrink-0 self-top mobile:w-full mobile:h-16">
                    <img class="h-full mobile:mx-auto" src={cactus} alt="FB"/>
                </div>
                <div className="text-xl px-20 futuraMedium text-textCommon opacity-70 italic mobile:px-0 mobile:text-sm mobile:pt-4">" {data.getFeedbackWithId.message} "</div>
            </div>)
        }
        </div>
    )
}

export default MyFeedback
