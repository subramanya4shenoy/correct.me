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
    <div className='w-screen flex pt-10 px-20 h-3/4 mobile:flex-wrap mobile:px-4'>
      <div className='w-1/2 self-center mobile:w-full'>
        <div className='text-6xl text-textCommon futuraBold leading-tight mobile:text-4xl mobile:text-center mobile:pt-24 mobile:pb-5'>
          Get to know <br /> Yourself better
        </div>
        <div className='tex-xl pt-6 futuraMedium text-textCommon mobile:text-center mobile:pt-3 mobile:text-sm mobile:px-6'>
          <span className="opacity-50">
          Anonymous feedback system. Share with your friends <br className="mobile:hidden"/>
          and get the honest feedback about yourself
          </span>
        {!loading && data && data.me && (
          <div className='mt-10'>
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
      </div>
      <div className='w-1/2 flex h-full pl-10 mobile:w-full mobile:h-auto mobile:flex-nowrap mobile:pl-0 mobile:px-6'>
        <div className='self-end'> <img className='h-24 mobile:w-1/2 mobile:h-auto' src={cactus} alt='cactus' /></div>
        <div> <img className='h-full ml-20 mobile:ml-0' src={HeroImage} alt='hero' /></div>
      </div>
    </div>
  );
};

export default LandingHero;
