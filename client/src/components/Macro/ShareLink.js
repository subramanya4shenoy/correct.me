import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SHARE_LINK } from '../../Resolvers/ShareLink';
import CopyButton from '../Micro/Copy';
import { Snackbar } from '@mui/material';

const ShareLink = () => {
  const { loading, data } = useQuery(SHARE_LINK, {
    fetchPolicy: 'network-only',
  });
  const [open, setOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      process.env.REACT_APP_DOMAIN + '/gf/' + data.getShareLink
    );
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className='flex self-center justify-center futuraMedium mt-4 mb-6 mobile:flex-wrap'>
        <div className='text-primarymain self-center mr-2 mobile:w-full mobile:text-center mobile:mt-0 mobile:text-sm mobile:my-4'>Sharable link </div>
        {loading ? (
          <>loading</>
        ) : (
          <>
            <div className='bg-primarylightest px-4 py-1 rounded-l text-left text-primarymain self-center border border-primarylight
                          mobile:text-xs mobile:m mobile:rounded mobile:w-full mobile:mx-8'>
              {process.env.REACT_APP_DOMAIN + '/gf/' + data.getShareLink}
            </div>
            <div className="mobile:rounded mobile:justify-self-end mobile:border-primarylight">
             <CopyButton copyToClipboard={copyToClipboard} />
            </div>
          </>
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message='Copied'
        onClose={handleClose}
      />
    </>
  );
};

export default ShareLink;
