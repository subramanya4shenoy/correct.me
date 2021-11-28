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
    <img
      className={`h-5 my-1.5 px-1 cursor-pointer inline active:bg-green-700 ${
        shake ? `shake` : null
      }`}
      src={copy}
      alt='share'
      onClick={() => {
        copyToClipboard();
        animate();
      }}
    />
  );
};

export default CopyButton;
