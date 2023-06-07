import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Stack } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './Item.css';

const Item = ({ id, name, price, img }) => {
    return (
        <Grid item md={3}   >

            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <Card
                    sx={{ maxWidth: '18rem'}}>
                    <CardActionArea className="item-link"

                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: 'black',

                        }}>
                        <CardMedia
                            component="img"
                            image={`../${img}`}
                            alt={name}
                            height={350}
                        />
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} >
                            <Typography
                                variant="body2"
                                component='h3'
                                color="text.secondary"
                                textAlign='center'
                            >
                                {name}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="p"
                                textAlign='center'
                            > ${price}
                            </Typography>
                            <Stack
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '30px',
                                    width: 'fit-content'
                                }}
                                variant="contained"
                            >
                                <LocalMallOutlinedIcon
                                    fontSize='large'
                                    color='primary'
                                />
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    )
}

export default Item

