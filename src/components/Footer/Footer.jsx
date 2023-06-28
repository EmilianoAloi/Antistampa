import { Stack, Typography, List, ListItem, Paper, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';
import './Footer.css'
import logo from '../../assets/logo.png'



const Footer = () => {

    return (
        <>


            <Paper elevation={10} className='footerDesktop' >
                <Stack sx={{ backgroundColor: '#F4BF00', height: '2px', mt: '5rem' }}>   </Stack>

                <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'start' }, justifyContent: 'space-evenly', marginY: '2rem' }}>
                    <Stack sx={{ width: {xs: '8rem', md:'12rem'}, alignSelf: 'center', marginBottom:'2rem' }}>
                        <img src={logo} alt="logo" />
                    </Stack>

                    <Stack sx={{ minWidth: '15rem' }}>
                        <List >

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='/'
                                >INICIO
                                </Button>
                            </ListItem>

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='./categoria/nacional'
                                >BANDAS NACIONALES
                                </Button>
                            </ListItem>


                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='./categoria/internacional'
                                >BANDAS INTERNACIONALES
                                </Button>
                            </ListItem>

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='./categoria/tote'
                                >TOTES
                                </Button>
                            </ListItem>

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button disabled sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='/'
                                >PRODUCTOS ANTISTAMPA
                                </Button>
                            </ListItem>

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='/personalizados'
                                >PERSONALIZADOS
                                </Button>
                            </ListItem>




                        </List>
                    </Stack>

                    <Stack sx={{ minWidth: '15rem', gap:3 }}>
                        <List >
                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='/personalizados'
                                >PREGUNTAS FRECUENTES
                                </Button>
                            </ListItem>

                            <ListItem sx={{ padding: '.2rem' }}>
                                <Button sx={{ padding: '0', minWidth: '0' }}
                                    component={NavLink}
                                    to='./contacto'
                                >CONTACTO
                                </Button>
                            </ListItem>
                        </List>

                        <Stack sx={{ width: { xs: '15rem', md: '20rem' } }}>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' }, fontSize: '0.8rem' }}>
                                Términos y condiciones <br /> Políticas de privacidad <br />
                                © 2023 Antistampa, Todos los derechos reservados.
                                Argentina C1428CL
                            </Typography>
                        </Stack>

                    </Stack>


                </Stack>


                <Stack sx={{ backgroundColor: '#F4BF00', height: '2px', marginBottom: '2rem' }}>   </Stack>

            </Paper>

        </>
    )
}

export default Footer