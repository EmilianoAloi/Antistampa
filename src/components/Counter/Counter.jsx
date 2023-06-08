import './Counter.css'
import { Button, Stack, Typography} from '@mui/material';
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
            <Stack flexDirection='row' gap={2}>

                <Button variant="contained" onClick={countDecrease} sx={{ fontSize: '3rem' }}>
                    <RemoveIcon />
                </Button>

                <Typography component='h4' variant='h5' fontWeight='800' >
                    {counter}
                </Typography>

                <Button variant="contained" onClick={countIncrease}>
                    <AddIcon />
                </Button>
                <Button variant="contained" onClick={() => addFunction(counter)}>Agregar al carrito</Button>

            </Stack>

        </>

    )
}

export default Counter