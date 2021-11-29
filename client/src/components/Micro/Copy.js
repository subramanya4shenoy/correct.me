import React, { useState } from 'react';
import copy from '../../assets/images/copy.svg';

const CopyButton = ({ copyToClipboard }) => {
  const [shake, setShake] = useState(false);

  const animate = () => {
    // Button begins to shake
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  return (
    <div className='border border-l-0 border-primarylight rounded-r'>
      <img
        className={`h-5 my-1.5 px-1 cursor-pointer inline ${
          shake ? `shake` : null
        }`}
        src={copy}
        alt='share'
        onClick={() => {
          copyToClipboard();
          animate();
        }}
      />
    </div>
  );
};

export default CopyButton;
