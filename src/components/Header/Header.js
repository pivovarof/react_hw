import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import NavMenu from '../NavMenu/NavMenu';
import './Header.css'



function Header() {


    return (
        <header className='header'>
            <AppBar>
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >HomeWorks</Typography>
                        <NavMenu />

                    </Toolbar>
                </Container>
            </AppBar>
        </header>


    )


}

export default Header;