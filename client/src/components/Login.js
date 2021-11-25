import React from 'react'
import Nav from './Macro/nav'
import LoginHero from './Macro/LoginHero'
import AllwaysFree from './Micro/AllwaysFree'

const Login = () => {
    return (
        <div>
           <Nav/>
          <LoginHero />
          <AllwaysFree />
        </div>
    )
}

export default Login
