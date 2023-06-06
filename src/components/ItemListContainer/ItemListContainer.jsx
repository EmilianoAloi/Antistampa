import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getproducts, getCatproducts } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {

        const productsFunction = idCategory ? getCatproducts : getproducts;

        productsFunction(idCategory)
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }, [idCategory]);

    return (
            <ItemList  products={products} />
    )
}

export default ItemListContainer