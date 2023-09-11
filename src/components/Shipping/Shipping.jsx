import { Stack } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import delivery from '../../assets/delivery.png'
import retiroLocal from '../../assets/retiroLocal.png'
import correo from '../../assets/correo.png'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Shipping = () => {

    // const [shippingOption, setShippingOption] = useState('delivery');

    const { shippingOption, setShippingOption, cart } = useContext(CartContext)


    const handleChange = (option) => {
        setShippingOption(option);
        cart.shippingOption = shippingOption;
        console.log(cart);
    };



    return (
        <>


            <Typography textAlign='start' component='h3' color='white' sx={{ fontSize: { xs: '1rem', sm: '2rem' }, marginY: '2rem', }}>Opciones de envio:</Typography>

            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="delivery"
                    name="radio-buttons-group"
                    onChange={(e) => handleChange(e.target.value)}
                    value={shippingOption}
                >

                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 4, maxHeight: 350 }}>

                        <Button onClick={() => { console.log(shippingOption); console.log(cart) }}>opcion envio</Button>

                        <Card sx={{ maxWidth: 345, minHeight: '23rem' }} >
                            <CardActionArea onClick={() => setShippingOption('delivery')} >
                                <CardMedia sx={{ width: '50%', m: '0 auto', marginTop: 2 }}
                                    component="img"
                                    image={delivery}
                                    alt="moto"

                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Moto Mensajeria
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Envios en menos de 24 hs todo AMBA <br />Precio: $2500
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'center' }} >


                                <FormControlLabel value="delivery" sx={{ paddingLeft: '1.5rem', marginTop: '-1rem', paddingY: '-1rem' }} control={<Radio />} />


                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, minHeight: '23rem' }}>
                            <CardActionArea onClick={() => setShippingOption('retiroLocal')} >
                                <CardMedia sx={{ width: '50%', height: 'auto', m: '0 auto', marginTop: 2 }}
                                    component="img"
                                    image={retiroLocal}
                                    alt="retiroLocal"
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Retiro por local
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        De Lunes a Viernes de 10 hs a 19 hs. <br />Precio: $0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'center' }} >

                                <FormControlLabel value="retiroLocal" sx={{ paddingLeft: '1.5rem', marginTop: '-1rem', paddingY: '-1rem' }} control={<Radio />} />

                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, minHeight: '23rem' }}>
                            <CardActionArea onClick={() => setShippingOption('correo')} >
                                <CardMedia sx={{ width: '50%', height: 'auto', m: '0 auto', marginTop: 2 }}
                                    component="img"
                                    height="140"
                                    image={correo}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Correo Argentino
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Envios a toda Argentina en 1 semana<br />
                                        Precio: $0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'center' }} >
                                <Stack >
                                    <FormControlLabel value="correo" sx={{ paddingLeft: '1.5rem', marginTop: '-1rem', paddingY: '-1rem' }} control={<Radio />} />
                                </Stack>
                            </CardActions>
                        </Card>


                    </Stack>

                </RadioGroup>
            </FormControl>





        </>


    )
}

export default Shipping