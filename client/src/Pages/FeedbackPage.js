import React, { useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useParams } from 'react-router-dom';
import Feedback from '../components/Feedback';
import MyFeedback from '../components/MyFeedback';
import WithAuth from '../utils/withAuth';

const FeedbackPage = () => {
  let { feedbackId } = useParams();
  return (
    <DocumentTitle title='Feedback'>
      <div className='mobile:h-screen mobile:overflow-y-auto'>
        {feedbackId ? <MyFeedback feedbackId={feedbackId} /> : <Feedback />}
      </div>
    </DocumentTitle>
  );
};

export default WithAuth(FeedbackPage);
