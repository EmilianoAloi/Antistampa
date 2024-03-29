import { Stack } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import delivery from '../../assets/delivery.png'
import retiroLocal from '../../assets/retiroLocal.png'
import correo from '../../assets/correo.png'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useEffect } from "react";

const Shipping = () => {


    const { shippingOption, setShippingOption, setShippingPrice } = useContext(CartContext)

    useEffect(() => {
        switch (shippingOption) {
            case 'Moto mensajeria':
                setShippingPrice(2500);
                break;
            case 'Retiro por local':
                setShippingPrice(0);
                break;
            case 'Correo Argentino':
                setShippingPrice(3500);
                break;
            default:
                setShippingPrice(0);
                break;
        }

    }, [shippingOption, setShippingPrice]);

    const handleChange = (option) => {
        setShippingOption(option);


    };



    return (
        <>


            <Typography textAlign='center' component='h3' color='white' sx={{ fontSize: { xs: '1.2rem', sm: '2rem' }, marginY: '2rem', fontWeight:'500' }}>OPCIONES DE ENVIO</Typography>

            <FormControl sx={{ display:'flex'}} >
                <RadioGroup 
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Moto mensajeria"
                    name="radio-buttons-group"
                    onChange={(e) => handleChange(e.target.value)}
                    value={shippingOption}
                >

                    <Stack  sx={{ flexDirection: {xs: 'column', md:'row'} , justifyContent: 'center', alignItems:'center', gap: 4 }}>

                        <Card sx={{ maxWidth: 280, minHeight: '15rem' }} >
                            <CardActionArea onClick={() => setShippingOption('Moto mensajeria')} >
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


                                <FormControlLabel value="Moto mensajeria" sx={{ paddingLeft: '1.5rem', marginTop: '0.1rem', paddingY: '-1rem' }} control={<Radio />} />


                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 280, minHeight: '15rem' }} >
                            <CardActionArea onClick={() => setShippingOption('Retiro por local')} >
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

                                <FormControlLabel value="Retiro por local" sx={{ paddingLeft: '1.5rem', marginTop: '0.1rem', paddingY: '-1rem' }} control={<Radio />} />

                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 280, minHeight: '15rem' }} >
                            <CardActionArea onClick={() => setShippingOption('Correo Argentino')} >
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
                                        Precio: $3500
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ justifyContent: 'center' }} >
                                <Stack >
                                    <FormControlLabel value="Correo Argentino" sx={{ paddingLeft: '1.5rem', marginTop: '0.1rem', paddingY: '-1rem' }} control={<Radio />} />
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