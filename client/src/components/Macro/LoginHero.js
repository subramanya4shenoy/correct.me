import React from 'react'
import bush from '../../assets/images/loginPageBush.svg'
import HeroImage from '../../assets/images/loginPageImage.svg'
import FacebookAuth from '../Micro/FacebookAuth';
const LoginHero = () => {
    return (
         <div className="w-screen h-screen flex pt-10 px-20 h-3/4">
            <div className="w-1/2 flex h-3/4 pr-10">
                <div className="self-end"> <img className="h-24" src={bush} alt={""}/> </div>
                <div> <img className="h-full ml-20" src={HeroImage} alt={""}/>  </div>
            </div>
            <div className="w-1/2 pt-20">
                <div className="text-3xl text-textCommon futuraBold text-center leading-tight">
                    Login now with Facebook <br/> <br/>
                    <FacebookAuth />
                </div>
            </div>
        </div>
    )
}

export default LoginHero
