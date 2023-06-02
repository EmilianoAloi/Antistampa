import cartImg from '../../assets/cart.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const {qtyTotal} = useContext(CartContext)

    return (
        <div className=''>
            <Link to='./cart'>
            <img className='cart' src={cartImg} alt="Carrito" />
            {
                qtyTotal > 0 && <span>{qtyTotal}</span>
            }
            </Link>
        </div>

    )
}

export default CartWidget;