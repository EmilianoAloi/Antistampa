import './SearchButton.css'
import { useState } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';


const SearchButton = () => {

    const [showTextField, setShowTextField] = useState(false);

    const handleClick = () => {
        setShowTextField(!showTextField);
    };

    return (
        <>
            <Button onClick={handleClick} className='btn-search' >🔎</Button>

            {showTextField && <TextField
                className='textField'
                fullWidth
                color="primary"
                variant="filled"
                label="Que estas buscando?"
                size="small"
                style={{ width: '700px' }}
            />}


        </>
    )
}



export default SearchButton