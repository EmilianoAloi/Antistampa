import { Box, List, ListItem, Stack, Button } from "@mui/material"
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
      }}>
      <List >
        <ListItem >

          <Stack direction="column" alignItems={'start'} spacing={3} sx={{ minWidth: '0' }}>


            <Button
              component={NavLink}
              to='/'
            >
            </Button>

            <Link onClick={handleCloseDrawer}
              to='./cart'
              style={{ textDecoration: 'none', margin: '0'}}>
              <CloseIcon fontSize="large" color="primary" />
            </Link>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            > INICIO
            </Button>
            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >BANDAS NACIONALES
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >BANDAS INTERNACIONALES
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >TOTES
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >PRODUCTOS ANTISTAMPA
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >PERSONALIZADOS
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >DUDAS
            </Button>

            <Button
              component={NavLink}
              to='/'
              onClick={handleCloseDrawer}
            >CONTACTO
            </Button>








            {/* 

            <ListItemText primary='INICIO' />
            <ListItemText primary='BANDAS NACIONALES' />
            <ListItemText primary='BANDAS INTERNACIONALES' />
            <ListItemText primary='TOTES' />
            <ListItemText primary='PRODUCTOS ANTISTAMPA' />
            <ListItemText primary='PERSONALIZADOS' />
            <ListItemText primary='DUDAS' />
            <ListItemText primary='CONTACTO' />

            <ListItemText /> */}
          </Stack>


        </ListItem>
      </List>




    </Box>
  )
}

export default NavListDrawer