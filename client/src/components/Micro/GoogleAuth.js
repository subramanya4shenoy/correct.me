import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useMutation } from '@apollo/client';
import { GOOGLE_LOGIN } from '../../Resolvers/GoogleLogin';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const GoogleAuth = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [mutateFunction, { data, loading, error }] = useMutation(GOOGLE_LOGIN, {
    onCompleted: (data) => {
      login(data);
    },
  });

  const login = async ({ AuthenticateGoogleUser }) => {
    console.log(AuthenticateGoogleUser);
    // setStorage
    const store = await storeDataToSessionStorage(AuthenticateGoogleUser);
    if (location.pathname.includes('/feedback')) {
      window.location.reload(true);
    } else {
      await navigate('../feedback', { replace: true });
    }
  };

  const storeDataToSessionStorage = async ({
    accessToken,
    name,
    id,
    short_name,
  }) => {
    await sessionStorage.setItem('token', accessToken);
    await sessionStorage.setItem(
      'user',
      JSON.stringify({ name: name, id: id, short_name: short_name })
    );
  };

  const onSuccess = (res) => {
    if (res) mutateFunction({ variables: { ...res } });
  };

  const onFailure = (err) => {
    console.log(err);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='Sign In'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        className={
          'text-sm mt-2 p-4 w-56 justify-center mx-auto cursor-pointer hover:shadow-lg'
        }
        isSignedIn={false}
      />
    </>
  );
};

export default GoogleAuth;
