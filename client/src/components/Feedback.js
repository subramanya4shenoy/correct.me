import React from 'react';
import FeedBackList from './Macro/FeedBackList';
import Nav from './Macro/nav';
import ShareLink from './Macro/ShareLink';

const Feedback = ({ feedbackId }) => {

  return (
    <>
      <Nav />
      <div className='futuraMedium text-textCommon text-center py-4 w-full text-4xl'>
        Hi Subu !
      </div>
      <ShareLink />
      <div className='flex justify-center'>
        <div className='w-3/12'>
        </div>
        <div className='w-9/12'>
          <FeedBackList />
        </div>
      </div>
      {feedbackId && <>popover</>}
    </>
  );
};

export default Feedback;
