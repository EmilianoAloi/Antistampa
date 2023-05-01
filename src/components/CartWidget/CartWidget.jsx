import cartImg from '../../assets/cart.png'
import './CartWidget.css'


const CartWidget = () => {
    return (
        <div className='d-flex gap-2 '>
            <img className='cart' src={cartImg} alt="Carrito" />
            <p>7</p>
        </div>

    )
}

export default CartWidget 