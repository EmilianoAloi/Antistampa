import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { useLocation } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import { Typography, CircularProgress, Stack } from '@mui/material';

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

            {idCategory === 'internacional' &&
                <Typography
                    component='h2'
                    className='heroTitle'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.4rem', sm: '2rem' }, textAlign: 'center', margin: '2rem' }}
                >Bandas Internacionales
                </Typography>}

            {idCategory === 'tote' &&
                <Typography
                    component='h2'
                    className='heroTitle'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.4rem', sm: '2rem' }, textAlign: 'center', margin: '2rem' }}
                >Totes
                </Typography>}

            {idCategory === 'nacional' &&
                <Typography
                    component='h2'
                    className='heroTitle'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.4rem', sm: '2rem' }, textAlign: 'center', margin: '2rem' }}
                >Bandas Nacionales
                </Typography>}


            {products.length === 0 ? ( <Stack sx={{margin:'0 auto', marginY:'20rem'}}><CircularProgress size={80} sx={{ margin: '0 auto' }} /> </Stack>) 
            : ( <Carrousel products={products} /> )}


            {/* <Carrousel products={products} /> */}
            {/* <ItemList products={products} /> */}

        </>

    )
}

export default ItemListContainer