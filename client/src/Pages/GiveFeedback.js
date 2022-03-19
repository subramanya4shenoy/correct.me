import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useParams } from 'react-router';
import GiveFeedbackCard from '../components/Micro/GiveFeedbackCard';
import { useQuery } from '@apollo/client';
import { GET_USER_INFO } from '../Resolvers/Me';
import FacebookAuth from '../components/Micro/FacebookAuth';
import GoogleAuth from '../components/Micro/GoogleAuth';

const GiveFeedback = () => {
  const { feedbackId } = useParams();
  const [done, setdone] = useState(false);

  const { loading, data } = useQuery(GET_USER_INFO, {
    variables: { id: feedbackId.toString() },
  });

  return (
    <DocumentTitle title='Give Feedback'>
      <div>
        {!loading && data && (
          <>
            {!done && (
              <div className='text-center text-textCommon text-2xl mt-20 futuraMedium'>
                Give anonymous feedback to
                <span className='capitalize futuraBold text-primarydark'>
                  {data.getUserWithId}{' '}
                </span>
              </div>
            )}
            {!done ? (
              <GiveFeedbackCard feedbackUserId={feedbackId} setdone={setdone} />
            ) : (
              <div className='text-center my-4'>
                <div className='text-2xl my-24 text-primarymain futuraBold'>
                  Your feedback has been sent!
                </div>
                <div className='px-10'>
                  <FacebookAuth />
                  <GoogleAuth />
                  <div className='text-sm text-textCommon opacity-75 futuraMedium py-10 w-1/2 mx-auto'>
                    If you are new or already has a login try to signIn and get
                    your feedback from your friends.
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DocumentTitle>
  );
};

export default GiveFeedback;
