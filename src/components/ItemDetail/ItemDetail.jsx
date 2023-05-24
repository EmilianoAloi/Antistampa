import './ItemDetail.css'
import Counter from '../Counter/Counter';

const ItemDetail = ({ name, price, img, product, description }) => {
    return (
        <>
            <div className='container mb-4'>
                <h2 className='detailTitle  '>DETALLES DE PRODUCTO</h2>
                <div class="line"></div>
            </div>

            <div className='itemContainer container d-flex justify-content-center  pe-5 mb-5'>
                <img className='imgDetail' src={img} alt={name} />
                <div className='infoDetail pt-5'>
                    <p className='prodDetail'>Producto: {product}</p>
                    <p className='titleDetail'>{name} <br /> ${price} </p>
                    <p className='titleDetail'></p>
                    <p>{description}</p>
                    <Counter initial={1} stock={10} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail