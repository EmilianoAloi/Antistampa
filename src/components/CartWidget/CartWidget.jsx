import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';

const CartWidget = () => {

    const { qtyTotal } = useContext(CartContext)

    return (

        <Link to='./cart' style={{ textDecoration: 'none' }}>
            <Badge badgeContent={qtyTotal} color="error" sx={{ marginBottom: '0.6rem' }} >
                <LocalMallOutlinedIcon color="primary" sx={{ fontSize: 32 }}/>
            </Badge>
        </Link>

    )
}

export default CartWidget;