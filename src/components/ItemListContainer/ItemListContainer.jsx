import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
// import { getproducts, getCatproducts } from '../../asyncmock'
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import Hero from '../Hero/Hero';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();



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

            <Hero />

            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer