import React, { useState } from 'react'
import Box from '@mui/material/Box';
import bgm from '../../assets/images/cardCover.svg'
import cactus from '../../assets/images/cactus.svg'
import logo from '../../assets/images/logo.svg'
import { Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { POST_FEEDBACKS } from '../../Resolvers/Feedbacks';

const GiveFeedbackCard = ({ feedbackUserId, done, setdone }) => {

    const [postFeedback, { loading, data, error }] = useMutation(POST_FEEDBACKS, { onCompleted: () => { successfullysubmitted() } });
    const [message, setmessage] = useState('');
    const style = {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        width: '300px',
        height: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '28px'
    };

    const successfullysubmitted = () => {
        setdone(true);
    }

    return (
        <div className="align-middle md:align-top">
                <Box sx={style} className="pb-20">
                    <img className="absolute left-0 top-0 m-4 z-20 h-8 opacity-40" src={logo} alt="cm" />
                    <img className="relative z-20 mx-auto h-24 mt-12" src={cactus} alt="pp" />
                    <img className="absolute left-0 top-0 w-full z-10" src={bgm} alt="bgm" />
                    <div className="pt-6 futuraMedium text-sm px-3 text-textCommon text-center max-h-56 h-auto">
                        <div className="my-2 text-xs text-textCommon opacity-40"> Minimum 10 charecters </div>
                        <textarea className="border-2 rounded-xl w-full  outline-none border-primarylight text-textCommon p-2 overflow-auto"
                            onChange={(e) => { setmessage(e.target.value) }} />
                    </div>
                    <div className="flex justify-between absolute bottom-0 w-full p-5">
                        <Button className={"w-full " + ((message.trim().length > 10) ? "cursor-pointer" : "opacity-50 pointer-events-none")} variant="contained" onClick={(e) => { postFeedback({ variables: { id: feedbackUserId, message: message } }) }}>Send</Button>
                    </div>
                </Box>
        </div>
    )
}

export default GiveFeedbackCard
