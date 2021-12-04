import React from 'react';
import FeedBackList from './Macro/FeedBackList';
import Nav from './Macro/nav';
import ShareLink from './Macro/ShareLink';

const Feedback = () => {

  return (
    <>
      <Nav />
      <div className='futuraMedium text-textCommon text-center py-4 w-full text-4xl mobile:mt-20 mobile:text-2xl'>
        Hi {JSON.parse(sessionStorage.getItem('user')).short_name}
      </div>
      <ShareLink />
      <div className='w-1/3 mx-auto mobile:w-screen'>
        <FeedBackList />
      </div>
    </>
  );
};

export default Feedback;
