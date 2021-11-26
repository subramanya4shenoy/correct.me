import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useMutation } from '@apollo/client';
import { FB_LOGIN } from '../../Resolvers/FBLogin';
import { useNavigate } from "react-router-dom";

const FacebookAuth = () => {
    let navigate = useNavigate();
    const [mutateFunction, { data, loading, error }] = useMutation(FB_LOGIN, {
        onCompleted: (data) => { login(data) }
    });


    const login = ({AuthenticateFacebookUser}) => {
        console.log(AuthenticateFacebookUser);
        // setStorage
        navigate("../feedback", { replace: true });
    }

    const responseFacebook = (response) => {
        console.log(response);
        mutateFunction({ variables: {...response}})
    }

    return (
        <>
        {(loading) ? (<>Loading..</>) :
        (<FacebookLogin
            appId="293926452664320"
            autoLoad={false}
            callback={responseFacebook} />)
        }
        </>
    )
}

export default FacebookAuth
