import React from 'react'
import LandingHero from './Macro/LandingHero'
import Nav from './Macro/nav'
import AllwaysFree from './Micro/AllwaysFree'

const Landing = () => {
    return (
        <div className="w-screen h-screen bg-body text-textCommon">
            <Nav/>
            <LandingHero/>
            <AllwaysFree />
        </div>
    )
}

export default Landing
