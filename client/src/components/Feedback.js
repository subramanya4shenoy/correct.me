import React, { useState } from 'react'
import FeedBackList from './Macro/FeedBackList';
import Menu from './Macro/Menu';
import Nav from './Macro/nav';
import ShareLink from './Macro/ShareLink';

const Feedback = ({ feedbackId }) => {

    const [selectedMenu, setselectedMenu] = useState("Recieved");

    return (
        <>
            <Nav />
            <div className="futuraMedium text-textCommon text-center py-4 w-full text-4xl"> Hi Subu !</div>
            <ShareLink />
            <div className="flex justify-center">
                <div className="w-3/12"><Menu selected={selectedMenu} onMenuChange={(e) => { setselectedMenu(e) }}/></div>
                <div className="w-9/12"><FeedBackList selectedMenu={selectedMenu}/></div>
            </div>
            {(feedbackId) && (<>popover</>)}
        </>
    )
}

export default Feedback;
