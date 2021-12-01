import React from 'react';
import Logo from '../Micro/Logo';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ME } from '../../Resolvers/Me';

const Nav = () => {
  let navigate = useNavigate();
  const { loading, data } = useQuery(ME, { fetchPolicy: 'network-only' });

  return (
    <div className='flex justify-between w-screen px-20'>
      <div className='self-center'>
        <Logo />
      </div>
      {!loading &&
        data &&
        (!data.me ? (
          <Button
            className='futuraMedium self-center'
            variant='text'
            onClick={() => {
              navigate('/feedback', { replace: true });
            }}
          >
            Login
          </Button>
        ) : (
          <Button
            className='futuraMedium self-center'
            variant='text'
            onClick={() => {
              sessionStorage.clear();
              navigate('/', { replace: true });
              window.location.reload();
            }}
          >
            Logout
          </Button>
        ))}
    </div>
  );
};

export default Nav;
