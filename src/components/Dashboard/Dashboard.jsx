import { Stack, Button, Input, TextField, Box, Container, Select, FormControl, InputLabel, MenuItem, Typography, Divider } from "@mui/material";
import { uploadImg } from '../../services/config';
import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import PriceModifier from "../PriceModifier/PriceModifier";

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


    // Modificar precios

    // const [remeraUnisexXs, setRemeraUnisexXs] = useState(0)
    // const [remeraUnisexS, setRemeraUnisexS] = useState(0)
    // const [remeraUnisexM, setRemeraUnisexM] = useState(0)
    // const [remeraUnisexL, setRemeraUnisexL] = useState(0)
    // const [remeraUnisexXl, setRemeraUnisexXl] = useState(0)
    // const [remeraUnisexXxl, setRemeraUnisexXxl] = useState(0)
    // const [remeraUnisexXxxl, setRemeraUnisexXxxl] = useState(0)

    // const [remeraNiño2, setRemeraNiño2] = useState(0)
    // const [remeraNiño4, setRemeraNiño4] = useState(0)
    // const [remeraNiño6, setRemeraNiño6] = useState(0)
    // const [remeraNiño8, setRemeraNiño8] = useState(0)
    // const [remeraNiño10, setRemeraNiño10] = useState(0)
    // const [remeraNiño12, setRemeraNiño12] = useState(0)
    // const [remeraNiño14, setRemeraNiño14] = useState(0)

    // const [buzoS, setBuzoS] = useState(0)
    // const [buzoM, setBuzoM] = useState(0)
    // const [buzoL, setBuzoL] = useState(0)
    // const [buzoXL, setBuzoXL] = useState(0)
    // const [buzoXXL, setBuzoXXL] = useState(0)
    // const [buzoXXXL, setBuzoXXXL] = useState(0)

    // const [buzoNiñoS, setBuzoNiñoS] = useState(0)
    // const [buzoNiñoM, setBuzoNiñoM] = useState(0)
    // const [buzoNiñoL, setBuzoNiñoL] = useState(0)
    // const [buzoNiñoXL, setBuzoNiñoXL] = useState(0)
    // const [buzoNiñoXXL, setBuzoNiñoXXL] = useState(0)
    // const [buzoNiñoXXXL, setBuzoNiñoXXXL] = useState(0)

    // const [hoodieS, setHoodieS] = useState(0)
    // const [hoodieM, setHoodieM] = useState(0)
    // const [hoodieL, setHoodieL] = useState(0)
    // const [hoodieXL, setHoodieXL] = useState(0)
    // const [hoodieXXL, setHoodieXXL] = useState(0)
    // const [hoodieXXXL, setHoodieXXXL] = useState(0)


    // const [hoodieNiñoS, setHoodieNiñoS] = useState(0)
    // const [hoodieNiñoM, setHoodieNiñoM] = useState(0)
    // const [hoodieNiñoL, setHoodieNiñoL] = useState(0)
    // const [hoodieNiñoXL, setHoodieNiñoXL] = useState(0)
    // const [hoodieNiñoXXL, setHoodieNiñoXXL] = useState(0)
    // const [hoodieNiñoXXXL, setHoodieNiñoXXXL] = useState(0)


    return (
        <>

            <Container>
                <Box component='form' onSubmit={handleForm} sx={{ marginY: '2rem' }}>

                    <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>SUBIR PRODUCTOS</Typography>



                    <Stack direction='row' gap={30} justifyContent='start'>

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
                <Divider />

                <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem' }}>MODIFICAR PRECIOS BASE DE PRODUCTOS</Typography>

                {/* <Stack className="modificarPrecios" direction='row' gap={8}>
                    <Stack color='white' gap={3} width={200} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Remeras Unisex:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XS: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexXs}
                                onChange={(e) => setRemeraUnisexXs(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>S: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexS}
                                onChange={(e) => setRemeraUnisexS(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>M: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexM}
                                onChange={(e) => setRemeraUnisexM(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>L: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexL}
                                onChange={(e) => setRemeraUnisexL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexXl}
                                onChange={(e) => setRemeraUnisexXl(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexXxl}
                                onChange={(e) => setRemeraUnisexXxl(e.target.value)} />
                        </Stack>



                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraUnisexXxxl}
                                onChange={(e) => setRemeraUnisexXxxl(e.target.value)} />
                        </Stack>


















                    </Stack>
                    <Stack color='white' gap={3} width={200} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Remeras Niños:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>2: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño2}
                                onChange={(e) => setRemeraNiño2(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>4: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño4}
                                onChange={(e) => setRemeraNiño4(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>6: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño6}
                                onChange={(e) => setRemeraNiño6(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>8: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño8}
                                onChange={(e) => setRemeraNiño8(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>10: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño10}
                                onChange={(e) => setRemeraNiño10(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>12: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño12}
                                onChange={(e) => setRemeraNiño12(e.target.value)} />
                        </Stack>



                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>14: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño14}
                                onChange={(e) => setRemeraNiño14(e.target.value)} />
                        </Stack>


















                    </Stack>
                    <Stack color='white' gap={3} width={200} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Buzos:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>S: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoS}
                                onChange={(e) => setBuzoS(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>M: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoM}
                                onChange={(e) => setBuzoM(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>L: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoL}
                                onChange={(e) => setBuzoL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoXL}
                                onChange={(e) => setBuzoXL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoXXL}
                                onChange={(e) => setBuzoXXL(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoXXXL}
                                onChange={(e) => setBuzoXXXL(e.target.value)} />
                        </Stack>




















                    </Stack>
                    <Stack color='white' gap={3} width={200} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Buzos Niños:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>S: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoS}
                                onChange={(e) => setBuzoNiñoS(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>M: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoM}
                                onChange={(e) => setBuzoNiñoM(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>L: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoL}
                                onChange={(e) => setBuzoNiñoL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoXL}
                                onChange={(e) => setBuzoNiñoXL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoXXL}
                                onChange={(e) => setBuzoNiñoXXL(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={buzoNiñoXXXL}
                                onChange={(e) => setBuzoNiñoXXXL(e.target.value)} />
                        </Stack>




















                    </Stack>
                </Stack>


                <Stack className="modificarPrecios2" direction='row' justifyContent='center' marginTop={5} gap={8}>
                    <Stack color='white' gap={3} width={160} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Hoodie:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XS: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieS}
                                onChange={(e) => setHoodieS(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>S: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieM}
                                onChange={(e) => setHoodieM(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>M: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieL}
                                onChange={(e) => setHoodieL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>L: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieXL}
                                onChange={(e) => setHoodieXL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieXXL}
                                onChange={(e) => setHoodieXXL(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>XXL: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieXXXL}
                                onChange={(e) => setHoodieXXXL(e.target.value)} />
                        </Stack>
                    </Stack>

                    <Stack color='white' gap={3} width={160} padding={5} border='1px solid yellow'>
                        <Typography sx={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Hoodie Niños:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>2: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoS}
                                onChange={(e) => setHoodieNiñoS(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>4: $ </Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoM}
                                onChange={(e) => setHoodieNiñoM(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>6: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoL}
                                onChange={(e) => setHoodieNiñoL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>8: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoXL}
                                onChange={(e) => setHoodieNiñoXL(e.target.value)} />
                        </Stack>

                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>10: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoXXL}
                                onChange={(e) => setHoodieNiñoXXL(e.target.value)} />
                        </Stack>


                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>12: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={hoodieNiñoXXXL}
                                onChange={(e) => setHoodieNiñoXXXL(e.target.value)} />
                        </Stack>



                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap={1}>
                            <Typography sx={{ fontSize: '1rem' }}>14: $</Typography>
                            <TextField
                                sx={{ width: '100px' }}
                                value={remeraNiño14}
                                onChange={(e) => setRemeraNiño14(e.target.value)} />
                        </Stack>


















                    </Stack>
                </Stack> */}


                <PriceModifier />

            </Container>


        </>
    )
}

export default Dashboard


