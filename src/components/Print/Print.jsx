
import { Button } from '@mui/material'
import { useContext } from 'react';
import { Stack, Input } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { PersonalizeContext } from '../Context/PersonalizeContext';

const Print = () => {

    const { setSelectedImage } = useContext(PersonalizeContext);

    return (
        <>
       
            <Stack >

                <Input
                    component='Button'
                    type="file"
                    accept="image/*"
                    id="print-input"
                    inputProps={{ accept: 'image/*' }}
                    style={{ display: 'none' }}
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="print-input">
                    <Button
                        startIcon={<ImageIcon />}
                        color='success'
                        variant="text"
                        component='span'
                        sx={{ width: '13rem', padding: '.2rem' }}>
                        Buscar imagen ...
                    </Button>
                </label>
                {/* <Button
                    variant='text'
                    startIcon={<UploadIcon />}
                    onClick={handleImageUpload}
                    sx={{ width: '13rem', padding: '.2rem' }}
                    disabled={!selectedImage}
                >
                    Subir estampado
                </Button> */}
            </Stack>







        </>
    )
}

export default Print