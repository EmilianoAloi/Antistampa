import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../services/config';
import { Button } from '@mui/material'
import { useState } from "react";


const Print = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleImageUpload = async () => {
        try {
            // Subir la imagen al almacenamiento de Firebase
            const storageRef = ref(storage, `imgPrint/${selectedImage.name}`);
            await uploadBytes(storageRef, selectedImage);

            // Obtener la URL de descarga de la imagen
            const imageURL = await storageRef.getDownloadURL();

            // Guardar la URL de la imagen en Firestore
            const docRef = await addDoc(collection(db, 'imgPrint'), {
                imageURL: imageURL
            });

            // Actualizar el estado con la URL de la imagen
            setImageURL(imageURL);

            console.log('Imagen subida correctamente');
        } catch (error) {
            console.error('Error al subir la imagen', error);
        }
    };

    return (
        <>

            <input type="file" accept="image/*" onChange={(e) => setSelectedImage(e.target.files[0])} />
            <Button variant='outlined' sx={{ width: '17rem', padding: '.2rem' }}>Agregar imagen de estampado</Button>;


        </>
    )
}

export default Print