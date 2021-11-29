import React, { useState } from 'react';
import Logo from '../Micro/Logo';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    // getting stored value from localstorage to check if user is authenticated
    // to be replaced later with usecontext
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  return (
    <div className='flex justify-between w-screen px-20'>
      {console.log(loggedIn)}
      <div className='self-center'>
        <Logo />
      </div>
      {!loggedIn ? (
        <Button
          className='futuraMedium self-center'
          variant='text'
          component={Link}
          to='/login'
        >
          Login
        </Button>
      ) : (
        <Button
          className='futuraMedium self-center'
          variant='text'
          onClick={() => localStorage.clear()}
          component={Link}
          to='/'
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default Nav;
