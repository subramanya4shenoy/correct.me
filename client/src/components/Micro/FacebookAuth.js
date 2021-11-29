import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useMutation } from '@apollo/client';
import { FB_LOGIN } from '../../Resolvers/FBLogin';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const FacebookAuth = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [mutateFunction, { data, loading, error }] = useMutation(FB_LOGIN, {
    onCompleted: (data) => {
      login(data);
    },
  });

  const login = async ({ AuthenticateFacebookUser }) => {
    console.log(AuthenticateFacebookUser);
    // setStorage
    const store = await storeDataToSessionStorage(AuthenticateFacebookUser);
      if(location.pathname.includes('/feedback')) {
          window.location.reload(true);
      } else {
        await navigate("../feedback", { replace: true });
      }
  };

  const storeDataToSessionStorage = async ({ accessToken, name, id }) => {
    await sessionStorage.setItem('token', accessToken);
    await sessionStorage.setItem('user', JSON.stringify({ name: name, id: id }));
  }

  const responseFacebook = (response) => {
    console.log(response);
    if (response?.status === 'unknown') return;
    mutateFunction({ variables: { ...response } });
  };

  return (
    <>
      {loading ? (
        <>Loading..</>
      ) : (
        <FacebookLogin
          appId='293926452664320'
          autoLoad={false}
          callback={responseFacebook}
        />
      )}
    </>
  );
};

export default FacebookAuth;
