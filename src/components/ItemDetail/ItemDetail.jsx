import './ItemDetail.css'
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ id, name, price, img, product, description, stock }) => {

    const [addQty, setAddQty] = useState(0);



    const { addItem } = useContext(CartContext);

    const handleQty = (qty) => {
        setAddQty(qty);
        console.log("Productos Agregados:" + qty);
        const item = { id, name, price };
        addItem(item, qty);

    }

    return (
        <>
            <div className='container mb-4 mt-2'>
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