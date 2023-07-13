import { Stack, Button, Input, TextField, Box, Container, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { uploadImg } from '../../services/config';
import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Dashboard = () => {

    const [name, setName] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [cat, setCat] = useState('');
    const [stock, setStock] = useState(0);

    // const [productId, setProductId] = useState();
    const [error, setError] = useState();

    const [file, setFile] = useState();
    const [extension, setExtension] = useState('');
    const [previewURL, setPreviewURL] = useState('');



    const handleForm = (e) => {
        e.preventDefault();
        uploadImg(file)
            .then((imageUrl) => {
                const newProduct = {
                    price: parseInt(price),
                    product: product,
                    img: imageUrl + '.' + extension,
                    cat: cat,
                    stock: parseInt(stock),
                    name: name,
                };

                return addDoc(collection(db, 'products'), newProduct);
            })
            // .then((docRef) => {
            //     setProductId(docRef.id);
            // })
            .catch((error) => {
                setError('Se produjo un error al crear nuevo producto, vuelva a intentar.');
            });
            console.log(error)

        setCat('');
        setPrice('');
        setName('');
        setStock('');
        setProduct('');
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileExtension = file.name.split('.').pop();
            setExtension(fileExtension);
            setFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewURL(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleChangeProduct = (e) => {
        setProduct(e.target.value);
    };


    const handleChangeCat = (e) => {
        setCat(e.target.value);
    };

    return (
        <>

            <Container>
                <Box component='form' onSubmit={handleForm} sx={{ marginY: '2rem' }}>

                    {/* <Typography sx={{ color: 'white', marginBottom: '2rem' }}>SUBIR PRODUCTOS</Typography> */}



                    <Stack direction='row' gap={5} justifyContent='start'>

                        <Stack sx={{ gap: '1rem', width: '50%' }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="cat-simple-select-label">Categoria</InputLabel>
                                    <Select
                                        labelId="cat-simple-select-label"
                                        id="cat-simple-select"
                                        value={cat}
                                        label="Categoria"
                                        onChange={handleChangeCat}
                                        required
                                    >
                                        <MenuItem value={'nacional'}>Bandas nacionales</MenuItem>
                                        <MenuItem value={'internacional'}>Bandas internacionales</MenuItem>
                                        <MenuItem value={'tote'}>Totes </MenuItem>
                                        <MenuItem value={'Producto Antistampa'}>Producto Antistampa</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="product-simple-select-label">Producto</InputLabel>
                                    <Select
                                        labelId="product-simple-select-label"
                                        id="product-simple-select"
                                        value={product}
                                        label="Producto"
                                        onChange={handleChangeProduct}
                                        required
                                    >
                                        <MenuItem value={'Remera Unisex'}>Remera Unisex</MenuItem>
                                        <MenuItem value={'Buzo Unisex'}>Buzo Unisex</MenuItem>
                                        <MenuItem value={'Hoodie Unisex'}>Hoodie </MenuItem>
                                        <MenuItem value={'Tote'}>Tote </MenuItem>
                                        <MenuItem value={'Antistampa'}>Producto Antistampa</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField id="outlined-basic" label="Nombre del producto (ej: Jimi Hendrix, Flema, Taza, Gorra) " variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
                            <TextField id="outlined-basic" label="Precio Base: $ (ej: 1000)" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} required />
                            <TextField id="outlined-basic" label="Stock (ej: 100)" variant="outlined" value={stock} onChange={(e) => setStock(e.target.value)} required />
                        </Stack>

                        <Stack>
                            {previewURL && (
                                <img src={previewURL} alt="Vista previa de la imagen" style={{ width: '250px', height: 'auto' }} />
                            )}
                        </Stack>

                    </Stack>

                    <Stack direction='row' gap={22} marginTop={2} >
                        <Stack sx={{ margin: '0rem' }}>
                            <Input
                                component='Button'
                                type="file"
                                id="file-input"
                                inputProps={{ accept: 'image/*' }}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />

                            <label htmlFor="file-input">
                                <Button variant="text" component="span">
                                    Seleccionar imagen
                                </Button>
                            </label>
                        </Stack>

                        <Button type="submit" variant='contained' size="large" >Subir nuevo producto</Button>

                    </Stack>

                </Box>


            </Container>


        </>
    )
}

export default Dashboard


