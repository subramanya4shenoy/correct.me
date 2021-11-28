import React from 'react';
import copy from '../../assets/images/copy.svg';

const CopyButton = ({ copyToClipboard }) => {
  return (
    <img
      className='h-5 my-1.5 px-1 cursor-pointer inline'
      src={copy}
      alt='share'
      onClick={() => copyToClipboard()}
    />
  );
};

export default CopyButton;
