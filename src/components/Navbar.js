import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from './logo.png';
import {auto} from "@popperjs/core"; // Ensure you have a logo.svg in your src folder or adjust the path accordingly.

function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src={Logo} alt="Logo" style={{ width: 100, height: auto }} />
                </IconButton>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    Remorque Barrière pour signaler
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
