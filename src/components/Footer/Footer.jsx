import { Stack, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material'
import './Footer.css'
import logo from '../../assets/logo.png'
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PortraitIcon from '@mui/icons-material/Portrait';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Footer = () => {

    return (
        <>


            <Stack sx={{ maxWidth: '95vw', margin: '0 auto', backgroundColor: '#F4BF00', mt: '5rem', flexDirection: 'column', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset', borderTopLeftRadius: '8rem', borderTopRightRadius: '8rem' }}>

                <Stack sx={{ flexDirection: 'row' , justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Stack>
                        <List >

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <HomeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="INICIO"
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ProductionQuantityLimitsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="PRODUCTOS"
                                />
                            </ListItem>


                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PortraitIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="PERSONALIZADOS"
                                />
                            </ListItem>


                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="DUDAS"
                                />
                            </ListItem>

                        </List>
                    </Stack>

                    <Stack sx={{ width: '12%' }}>
                        <img src={logo} alt="logo" />
                    </Stack>

                    <Stack>
                        <List >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="INICIO"
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="PRODUCTOS"
                                />
                            </ListItem>


                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ color: 'black' }}>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="PERSONALIZADOS"
                                />
                            </ListItem>


                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LiveHelpIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="DUDAS"
                                />
                            </ListItem>

                        </List>
                    </Stack>

                </Stack>

                <Stack sx={{color:'black',maxWidth: '80%', margin:'0 auto'}} >
                    <Typography >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos accusantium sint fuga. Itaque assumenda, minus nostrum aperiam porro qui temporibus </Typography>
                </Stack>




            </Stack>






        </>
    )
}

export default Footer