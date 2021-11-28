import React from 'react';
import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      className='w-16 cursor-pointer'
      src={logo}
      alt={'Correct me Logo'}
      onClick={() => navigate('/')}
    />
  );
};

export default Logo;
