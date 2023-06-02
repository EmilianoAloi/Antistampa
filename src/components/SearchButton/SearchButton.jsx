import { useState } from "react";
import { Button, TextField } from "@mui/material";

const SearchButton = () => {

    const [showTextField, setShowTextField] = useState(false);

    const handleClick = () => {
        setShowTextField(!showTextField);
    };
    return (
        <>
            <Button onClick={handleClick} className='' >🔎</Button>

            {showTextField && <TextField
                className='textField '
                fullWidth
                color="primary"
                variant="filled"
                label="Busca tu banda o pelicula favorita.."
                size="small"
            />}
        </>
    )
}

export default SearchButton