
import './NavBar.css'
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar } from "@mui/material";
import NavListDrawer from "../NavListDrawer/NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget';
import ProductsButton from '../ProductsButton/ProductsButton';

import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="sticky" sx={{ top: { lg: '1rem' }, borderRadius: '1rem' }}>
                <Toolbar component='nav' sx={{ gap: 5, justifyContent: 'space-evenly', backgroundColor: 'black', borderRadius: '1rem' }}>
                    <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
                        <MenuIcon color='primary' sx={{ fontSize: 32 }} />
                    </IconButton>

                    <Link to='/'>
                        <img className="logoMobile" src="../img/logo.png" alt="Logo" />
                    </Link>

                    <IconButton sx={{ display: { xs: 'block', sm: 'none' }, }}>
                        <CartWidget />
                    </IconButton>

                    <Stack
                        className='navlinks'
                        component='ul'
                        textAlign='center'
                        flexDirection='row'
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            color: 'primary',
                            textDecoration: 'none'
                        }}
                    >

                        <Button component={NavLink} to='/' >INICIO</Button>
                        <ProductsButton />
                        <Button component={NavLink} to={'/personalizados'}>PERSONALIZADOS</Button>
                        <Button component={NavLink} to={'/dudas'} >DUDAS</Button>
                        <Button component={NavLink} to={'/contacto'}>CONTACTO</Button>
                    </Stack>

                    <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <CartWidget />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
            >
                <NavListDrawer setOpen={setOpen} />
            </Drawer>
        </>
    );
}

export default NavBar;

