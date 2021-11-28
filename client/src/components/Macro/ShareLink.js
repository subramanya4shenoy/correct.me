import React from 'react';
import { useQuery } from '@apollo/client';
import { SHARE_LINK } from '../../Resolvers/ShareLink';
import CopyButton from '../Micro/Copy';

const ShareLink = () => {
  const { loading, data } = useQuery(SHARE_LINK, {
    fetchPolicy: 'network-only',
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.getShareLink);
  };

  return (
    <div className='flex self-center justify-center futuraMedium mt-4 mb-6'>
      <div className='text-primarymain self-center mr-2'>Sharable link </div>
      {loading ? (
        <>loading</>
      ) : (
        <>
          <div className='bg-primarylighter px-4 py-1 rounded text-left text-primarydarker self-center cursor-pointer'>
            {data.getShareLink}
          </div>
          <CopyButton copyToClipboard={copyToClipboard} />
        </>
      )}
    </div>
  );
};

export default ShareLink;
