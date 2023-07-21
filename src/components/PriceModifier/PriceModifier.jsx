import { useState } from 'react';
import { collection, query, where, updateDoc, doc as firestoreDoc, getDocs } from 'firebase/firestore';
import { db } from '../../services/config';
import { Button, Box, MenuItem, FormControl, InputLabel, Select, Stack, TextField } from '@mui/material';

const PriceModifier = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    // const [selectedProduct, setSelectedProduct] = useState('');
    const [newPrice, setNewPrice] = useState('');


    const updatePriceItem = async (selectedCategory, newPrice) => {
        try {

            const productsRef = collection(db, 'products');
            const q = query(productsRef, where('cat', '==', selectedCategory));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.error('No se encontraron productos para la categoría seleccionada');
                return;
            }

            querySnapshot.forEach((doc) => {

                const productRef = firestoreDoc(db, `products/${doc.id}`);
                updateDoc(productRef, { price: newPrice });
            });

        } catch (error) {
            console.error('Error al actualizar el precio', error);
        }
    };

    const handlePriceUpdate = () => {
        if (!selectedCategory || !newPrice) {
            console.error('Debes seleccionar una categoría y proporcionar un nuevo precio');
            return;
        }

        updatePriceItem(selectedCategory, parseFloat(newPrice));
        setNewPrice('');
    };




    return (
        <>


            {/* <label htmlFor="select-product">Seleccionar por tipo de producto:</label>
            <select id="select-category" value={selectedProduct} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="Remera Unisex">Remera Unisex</option>
                <option value="Buzo Oversize XXXL">Buzo Oversize XXXL</option>
                <option value="Hoodie Oversize XXXL">Hoodie Oversize XXXL</option>
            </select> */}



            <Stack direction='row' gap={5} margin={2}>
                <Box sx={{ minWidth: 120, width: '30%' }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-category">Categoria</InputLabel>
                        <Select
                            labelId="select-category"
                            id="cat-simple-select"
                            value={selectedCategory}
                            label="Categoria"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            required
                        >
                            <MenuItem value={'nacional'}>Bandas nacionales</MenuItem>
                            <MenuItem value={'internacional'}>Bandas internacionales</MenuItem>
                            <MenuItem value={'tote'}>Totes </MenuItem>
                            <MenuItem value={'antistampa'}>Producto Antistampa</MenuItem>

                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    type="number"
                    label="Nuevo precio $"
                    id="new-price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    inputProps={{
                        style: { appearance: 'textfield' }
                    }}
                />

                <Button variant='contained' onClick={handlePriceUpdate}>Actualizar precios</Button>
            </Stack>
        </>
    );
};

export default PriceModifier;