import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



const CartWidget = () => {

    const {qtyTotal} = useContext(CartContext)

    return (
            <Link to='./cart' style={{ textDecoration: 'none' }}>
            <LocalMallOutlinedIcon fontSize='medium'  color='primary' />
            { qtyTotal > 0 && <span className='numberCart'>{qtyTotal}</span> }
            </Link>
    )
}

export default CartWidget;