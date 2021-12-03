import React from 'react'
import bush from '../../assets/images/loginPageBush.svg'
import HeroImage from '../../assets/images/loginPageImage.svg'
import FacebookAuth from '../Micro/FacebookAuth';
import meta from '../../assets/images/meta.svg';

const LoginHero = () => {
    return (
         <div className="w-screen flex pt-10 px-20 h-3/4 mobile:flex-wrap mobile:px-4 mobile:pt-24 mobile:overflow-hidden">

            <div className="w-1/2 flex h-3/4 pr-10 mobile:w-full mobile:px-4 mobile:pr-0">
                <div className="self-end"> <img className="h-24 mobile:-mb-10" src={bush} alt="bush"/> </div>
                <div> <img className="h-full ml-20 mobile:h-auto mobile:w-full mobile:ml-0 mobile:-mb-4" src={HeroImage} alt="hero"/>  </div>
            </div>

            <div className="w-1/2 pt-20 mobile:w-full mobile:px-4 mobile:pt-10">
                <div className="text-3xl text-textCommon futuraBold text-center leading-tight mobile:text-xl">
                    <div className="flex justify-center my-8 mobile:my-4">
                        <div className="mobile:text-sm">Login now with </div>
                        <div className="h-5 mt-2 ml-5 mobile:h-3 mobile:ml-2 mobile:mt-1"><img className="h-full" src={meta} alt="Meta"/></div>
                    </div>
                    <FacebookAuth />
                </div>
            </div>

        </div>
    )
}

export default LoginHero
