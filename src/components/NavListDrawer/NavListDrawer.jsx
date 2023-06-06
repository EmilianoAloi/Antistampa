import { Box, List, ListItem, ListItemText, Stack } from "@mui/material"


const NavListDrawer = () => {

  return (

    <Box 

      sx={{
        width: '70vw',
      }}>
        <List >
          <ListItem >

            <Stack direction="column"  spacing={3}>
              <ListItemText primary='INICIO' />
              <ListItemText primary='REMERAS' />
              <ListItemText primary='BUZOS' />
              <ListItemText primary='ANTISTAMPA' />
              <ListItemText primary='PERSONALIZADOS' />
              <ListItemText primary='DUDAS' />
              <ListItemText primary='CONTACTO' />

              <ListItemText />
            </Stack>


          </ListItem>
        </List>




    </Box>
  )
}

export default NavListDrawer