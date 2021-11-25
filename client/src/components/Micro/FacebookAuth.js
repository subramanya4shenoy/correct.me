import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const FacebookAuth = () => {
    return (
        <Button className="futuraMedium align-center" variant="text" component={Link} to="/feedback">Facebook</Button>
    )
}

export default FacebookAuth
