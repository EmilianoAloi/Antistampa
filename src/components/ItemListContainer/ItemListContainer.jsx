import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getproducts } from '../../asyncmock'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getproducts()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, []);


    return (
        <>
            <h2 className='title'> {greeting}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer