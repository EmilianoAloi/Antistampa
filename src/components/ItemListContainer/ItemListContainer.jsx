import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getproducts, getCatproducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { idCat } = useParams();

    useEffect(() => {

        const productsFunction = idCat ? getCatproducts : getproducts;

        productsFunction(idCat)
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }, [idCat]);


    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer