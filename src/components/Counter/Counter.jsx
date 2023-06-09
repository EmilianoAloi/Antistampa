import './Counter.css'
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Counter = ({ stock, initial, addFunction }) => {

    const [counter, setCounter] = useState(initial);


    const countIncrease = () => {
        if (counter < stock && counter < 9) {
            setCounter(counter + 1);
        }
    }

    const countDecrease = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <Stack gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }} >

                <Stack flexDirection='row' gap={5}>

                    <Button variant="contained"
                        onClick={countDecrease}
                    >
                        <RemoveIcon />
                    </Button>

                    <Typography
                        component='h4'
                        variant='h5'
                        fontWeight='800'
                       sx={{paddingTop: {xs: '0', md:'0.5rem'}}}>
                        {counter}
                    </Typography>

                    <Button variant="contained" size='small'
                        onClick={countIncrease}
                    >
                        <AddIcon  />
                    </Button>

                </Stack>

                <Stack maxWidth='14rem' >
                    <Button variant="contained" sx={{height:'3rem'}}
                        onClick={() => addFunction(counter)}
                    >
                        Agregar al carrito
                    </Button>
                </Stack>
            </Stack>

        </>

    )
}

export default Counter


// sx={{ paddingTop: '12px', paddingBottom: '12px', borderRadius: '12px' }} >
