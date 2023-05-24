import './Counter.css'
import Button from 'react-bootstrap/Button';

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
        <div className='counter d-flex gap-3 r align-items-center'>
            <Button className='btn-1' onClick={countDecrease}> - </Button>
            <p className='pt-3'>{counter}</p>
            <Button className='btn-1' onClick={countIncrease}> + </Button>
            <Button className='btn-1' onClick={buyItem}>Agregar al carrito</Button>
        </div>
    )
}

export default Counter