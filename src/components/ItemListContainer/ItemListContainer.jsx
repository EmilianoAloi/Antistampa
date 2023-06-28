import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
// import { getproducts, getCatproducts } from '../../asyncmock'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { useLocation } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();



    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);



    useEffect(() => {
        const myProducts = idCategory ? query(collection(db, 'products'), where('cat', '==', idCategory)) : collection(db, 'products')

        getDocs(myProducts)
            .then(res => {
                const newProducts = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
    }, [idCategory])



    return (
        <>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer