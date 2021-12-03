import React from 'react';
import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      className='desktop:w-16 cursor-pointer mobile:w-10'
      src={logo}
      alt={'Correct me Logo'}
      onClick={() => navigate('/')}
    />
  );
};

export default Logo;
