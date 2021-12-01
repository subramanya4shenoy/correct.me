import React from 'react';
import cactus from '../../assets/images/cactus.svg';
import HeroImage from '../../assets/images/landingPageImage.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { ME } from '../../Resolvers/Me';

const LandingHero = () => {
  let navigate = useNavigate();
  const { loading, data } = useQuery(ME, { fetchPolicy: 'network-only' });

  return (
    <div className='w-screen flex pt-10 px-20 h-3/4'>
      <div className='w-1/2 self-center'>
        <div className='text-6xl text-textCommon futuraBold leading-tight'>
          Get to know <br /> Yourself better
        </div>
        <div className='tex-xl pt-6 futuraMedium text-textCommon opacity-50'>
          Anonymous feedback system. Share with your friends <br />
          and get the honest feedback about yourself
        </div>
        {!loading && data && data.me && (
          <div className='mt-2'>
            <Button
              size='medium'
              variant='contained'
              onClick={() => {
                navigate('/feedback', { replace: true });
              }}
            >
              Go to feedback
            </Button>
          </div>
        )}
      </div>
      <div className='w-1/2 flex h-full pl-10'>
        <div className='self-end'>
          {' '}
          <img className='h-24' src={cactus} alt={''} />{' '}
        </div>
        <div>
          {' '}
          <img className='h-full ml-20' src={HeroImage} alt={''} />{' '}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
