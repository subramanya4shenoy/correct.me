import React from 'react'
import LandingHero from './Macro/LandingHero'
import Nav from './Macro/nav'
import Free from '../assets/images/allwaysfree.svg'


const Landing = () => {
    return (
        <div className="w-screen h-screen bg-body text-textCommon">
            <Nav/>
            <LandingHero/>
            <img className="absolute right-0 bottom-0 w-48 h-48 -mb-16 -mr-16" src={Free} alt={"Free"}/>
        </div>
    )
}

export default Landing
