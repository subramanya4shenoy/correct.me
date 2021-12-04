import React from 'react'
import Box from '@mui/material/Box';
import bgm from '../../assets/images/cardCover.svg'
import cactus from '../../assets/images/cactus.svg'
import logo from '../../assets/images/logo.svg'
import ShareButton from './Share';
import DeleteButton from './Delete';

const FeedbackShareCard = ({ feedback }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '28px'
      };

    return (
        <div className="align-middle md:align-top">
            <Box sx={style} className="pb-20">
                <img className="absolute left-0 top-0 m-4 z-20 h-8 opacity-40" src={logo} alt="cm"/>
                <img className="relative z-20 mx-auto h-24 mt-12" src={cactus} alt="pp"/>
                <img className="absolute left-0 top-0 w-full z-10" src={bgm} alt="bgm"/>
                <div className="pt-6 px-4 futuraMedium text-sm text-textCommon opacity-70 text-center max-h-56 h-auto overflow-auto">
                    {feedback.message}
                </div>
                <div className="flex justify-end absolute bottom-0 w-full p-5">
                    <div className="self-center">
                        <ShareButton link={`${process.env.REACT_APP_DOMAIN}/feedback/${feedback.id}`}/>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default FeedbackShareCard
