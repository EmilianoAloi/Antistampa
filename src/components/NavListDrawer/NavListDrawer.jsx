import { Box, List, ListItem, Button, Divider } from "@mui/material"
import { Link, NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


const NavListDrawer = ({ setOpen }) => {

  const handleCloseDrawer = (e) => {
    setOpen(false);
  }

  return (

    <Box
      sx={{
        width: '75vw',
        padding: '0px'
      }}>

      <List disablePadding
        sx={{ minWidth: '0px' }}>

        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Link onClick={handleCloseDrawer}>
            <CloseIcon fontSize="large" color="primary" sx={{ marginTop: '1rem' }} />
          </Link>
        </ListItem>

        <ListItem sx={{ paddingLeft: '0rem' }}>
          <Button
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='/'
            onClick={handleCloseDrawer}
          >INICIO
          </Button>
        </ListItem>


        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Button
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='./categoria/nacional'
            onClick={handleCloseDrawer}
          >BANDAS NACIONALES
          </Button>
        </ListItem>

        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Button
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='./categoria/internacional'
            onClick={handleCloseDrawer}
          >BANDAS INTERNACIONALES
          </Button>
        </ListItem>

        <ListItem sx={{ paddingLeft: '0rem' }}>
          <Button
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='./categoria/tote'
            onClick={handleCloseDrawer}
          >TOTES
          </Button>
        </ListItem>

        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Button disabled
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='/'
            onClick={handleCloseDrawer}
          >PRODUCTOS ANTISTAMPA
          </Button>
        </ListItem>



        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Button disabled
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='/'
            onClick={handleCloseDrawer}
          >PERSONALIZADOS
          </Button>
        </ListItem>

        <Divider />

        <ListItem sx={{ paddingLeft: '0rem' }}>
          <Button disabled
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='/'
            onClick={handleCloseDrawer}
          >DUDAS
          </Button>
        </ListItem>

        <ListItem sx={{ paddingLeft: '0.5rem' }}>
          <Button disabled
            sx={{ padding: '0rem' }}
            component={NavLink}
            to='/'
            onClick={handleCloseDrawer}
          >CONTACTO
          </Button>
        </ListItem>

      </List>
    </Box>
  )
}

export default NavListDrawer