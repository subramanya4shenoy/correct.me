import React, { useState } from 'react';
import cactus from '../../assets/images/cactus.svg';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FeedbackShareCard from './FeedbackShareCard';

const FeedbackCard = ({ feedback }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className='border border-primarylighter flex rounded-lg w-full my-2 bg-primarycontrastText p-4 cursor-pointer hover:bg-primarylighter'
        onClick={(e) => {
          handleOpen();
        }}
      >
        <div className='h-10 w-10 rounded-full bg-primarylighter self-center mr-4 flex-shrink-0'>
          <img className='mx-auto h-full' src={cactus} alt='U' />
        </div>
        <div className='futuraMedium text-textCommon opacity-75 text-sm self-center'>
          {feedback.message}
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <>
            <FeedbackShareCard feedback={feedback} />
          </>
        </Modal>
      </div>
    </>
  );
};

export default FeedbackCard;
