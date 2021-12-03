import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import { useMutation } from '@apollo/client';
import { FB_LOGIN } from '../../Resolvers/FBLogin';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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
    if (location.pathname.includes('/feedback')) {
      window.location.reload(true);
    } else {
      await navigate("../feedback", { replace: true });
    }
  };

  const storeDataToSessionStorage = async ({ accessToken, name, id, short_name }) => {
    await sessionStorage.setItem('token', accessToken);
    await sessionStorage.setItem('user', JSON.stringify({ name: name, id: id, short_name: short_name }));
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
        // <FacebookLogin
        //   appId={process.env.REACT_APP_CLIENT_ID_FB}
        //   autoLoad={false}
        //   fields="name,email,picture,short_name"
        //   callback={responseFacebook}
        // />
        <FacebookLogin
          appId={process.env.REACT_APP_CLIENT_ID_FB}
          autoLoad
          callback={responseFacebook}
          fields="name,email,picture,short_name"
          render={renderProps => (
            <button className="" onClick={renderProps.onClick}>signin with meta</button>
          )}
        />
      )}
    </>
  );
};

export default FacebookAuth;
