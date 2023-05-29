import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, price, img, product, description, stock }) => {

    const [addQty, setAddQty] = useState(0);

    const handleQty = (qty) => {
        setAddQty(qty);
    }

    return (
        <>
            <div className='container mb-4'>
                <h2 className='detailTitle  '>DETALLES DE PRODUCTO</h2>
                <div className="line"></div>
            </div>

            <div className='itemContainer container d-flex justify-content-center  pe-5 mb-5'>
                <img className='imgDetail' src={img} alt={name} />
                <div className='infoDetail pt-5'>
                    <p className='prodDetail'>Producto: {product}</p>
                    <p className='titleDetail'>{name} <br /> ${price} </p>
                    <p className='titleDetail'></p>
                    <p>{description}</p>

                    {

                        addQty > 0 ? (<Link to='/cart'>Terminar Compra</Link>) : <Counter initial={1} stock={stock} addFunction={handleQty} />

                    }


                </div>
            </div>
        </>
    )
}

export default ItemDetail