import React from 'react'
import FacebookLogin from 'react-facebook-login';

const FacebookAuth = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId="293926452664320"
            autoLoad={false}
            callback={responseFacebook} />
    )
}

export default FacebookAuth
