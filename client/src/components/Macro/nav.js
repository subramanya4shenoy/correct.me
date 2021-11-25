import React from 'react'
import Logo from '../Micro/Logo'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="flex justify-between w-screen px-20">
            <div className="self-center"><Logo/></div>
            <Button className="futuraMedium self-center" variant="text" component={Link} to="/login">Login</Button>
        </div>
    )
}

export default Nav