import { Stack } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import delivery from '../../assets/delivery.png'
import retiroLocal from '../../assets/retiroLocal.png'
import correo from '../../assets/correo.png'

const Shipping = () => {
    return (
        <>


            <Typography textAlign='start' component='h3' color='white' sx={{ fontSize: { xs: '1rem', sm: '2rem' }, marginY: '2rem', }}>Opciones de envio:</Typography>

            <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 4, maxHeight: 350 }}>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
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
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
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
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia sx={{ width: '50%', height: 'auto', m: '0 auto', marginTop: 2 }}
                            component="img"
                            height="140"
                            image={correo}
                            alt="green iguana"
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Envio por Correo Argentino
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Envios a toda Argentina,<br />
                                Precio: $0
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>



            </Stack>






        </>


    )
}

export default Shipping