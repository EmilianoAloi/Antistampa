import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import './ProductsButton.css'


const ProductosDropdown = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button onClick={handleClick}>
                Productos <KeyboardArrowDownIcon />
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} >
                    <NavLink to={'/categoria/internacional'} className="dropdown-button"> Bandas Internacionales </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink to='./categoria/nacional' className="dropdown-button"> Bandas Nacionales </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink to='./categoria/tote' className="dropdown-button"> Totes </NavLink>
                </MenuItem>

            </Menu>
        </>
    );
};

export default ProductosDropdown;
