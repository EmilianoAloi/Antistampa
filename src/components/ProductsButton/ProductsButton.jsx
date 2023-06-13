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

                <MenuItem onClick={handleClose}
                    component={NavLink}
                    to={'/categoria/internacional'}
                    className="dropdown-button" >
                    Bandas Internacionales
                </MenuItem>

                <MenuItem onClick={handleClose}
                    component={NavLink}
                    to={'./categoria/nacional'}
                    className="dropdown-button" >
                    Bandas Nacionales
                </MenuItem>

                <MenuItem onClick={handleClose}
                    component={NavLink}
                    to={'./categoria/tote'}
                    className="dropdown-button">
                    Totes
                </MenuItem>

            </Menu>
        </>
    );
};

export default ProductosDropdown;
