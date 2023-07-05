import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Item = ({ id, name, price, img }) => {
    return (

            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ }}>
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
                            height={400}
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
    )
}

export default Item

