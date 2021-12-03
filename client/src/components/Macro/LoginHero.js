import React from 'react'
import bush from '../../assets/images/loginPageBush.svg'
import HeroImage from '../../assets/images/loginPageImage.svg'
import FacebookAuth from '../Micro/FacebookAuth';
const LoginHero = () => {
    return (
         <div className="w-screen flex pt-10 px-20 h-3/4 mobile:flex-wrap mobile:px-4 mobile:pt-24">

            <div className="w-1/2 flex h-3/4 pr-10 mobile:w-full mobile:px-4">
                <div className="self-end"> <img className="h-24 mobile:-mb-10" src={bush} alt="bush"/> </div>
                <div> <img className="h-full ml-20 mobile:h-auto mobile:w-full mobile:ml-0 mobile:-mb-4" src={HeroImage} alt="hero"/>  </div>
            </div>

            <div className="w-1/2 pt-20 mobile:w-full mobile:px-4">
                <div className="text-3xl text-textCommon futuraBold text-center leading-tight mobile:text-xl">
                    Login now with Facebook <br/> <br/>
                    <FacebookAuth />
                </div>
            </div>

        </div>
    )
}

export default LoginHero
