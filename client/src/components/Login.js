import React from 'react'
import Nav from './Macro/nav'
import LoginHero from './Macro/LoginHero'
import AllwaysFree from './Micro/AllwaysFree'

const Login = () => {
    return (
        <div>
          <Nav/>
          <LoginHero />
          <AllwaysFree className="mobile:hidden desktop:block"/>
        </div>
    )
}

export default Login
