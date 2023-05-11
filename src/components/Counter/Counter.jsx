import './Counter.css'
import { useState } from 'react'

const Counter = ({ stock, initial }) => {

    const [counter, setCounter] = useState(initial);

    const buyItem = () => {
        alert(`Agregado ${counter} items`)
    }

    const countIncrease = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const countDecrease = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='d-flex gap-3 justify-content-center'>
            <button onClick={countDecrease}> - </button>
            <p className='counter'>{counter}</p>
            <button onClick={countIncrease}> + </button>
        <button onClick={buyItem}>Agregar al carrito</button>
        </div>
    )
}

export default Counter