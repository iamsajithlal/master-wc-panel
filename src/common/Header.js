import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from '../redux/slices/login';
import { useDispatch  } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    const loguoutHandler = () => {
        dispatch(logout())
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>about</Link>
                    </Typography>
                    <Button color="inherit"  onClick={loguoutHandler} >Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Header;