import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';
import { useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Stack, Grid } from '@mui/material';
import ItemList from '../ItemList/ItemList';

const ItemListContainer2 = () => {

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

            {idCategory === 'antistampa' &&
                <Typography
                    component='h2'
                    className='heroTitle'
                    color='white'
                    fontWeight={600}
                    sx={{ fontSize: { xs: '1.4rem', sm: '2rem' }, textAlign: 'center', margin: '2rem' }}
                >Antistampa
                </Typography>}


            {products.length === 0 ? (<Stack sx={{ margin: '0 auto', marginY: '20rem' }}><CircularProgress size={80} sx={{ margin: '0 auto' }} /> </Stack>)
                : (


                        <Grid container sx={{ display: 'flex', justifyContent: 'center', padding:'1%' }} >
                            <ItemList products={products} />
                        </Grid>

                )}



        </>

    )
}

export default ItemListContainer2