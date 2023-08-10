import { useState, createContext } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/config';
import Swal from "sweetalert2";


export const PersonalizeContext = createContext();

export const PersonalizeProvider = ({ children }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleImageUpload = async () => {
        try {
            // Subir la imagen al almacenamiento de Firebase
            const storageRef = ref(storage, `imgPrint/${selectedImage.name}`);
            await uploadBytes(storageRef, selectedImage);

            // Obtener la URL de descarga de la imagen
            const imageURL = await getDownloadURL(storageRef);

            // Actualizar el estado con la URL de la imagen
            setImageURL(imageURL);
            Swal.fire({
                title: 'Imagen de estampado subida correctamente',
                icon: 'success',
            });

        } catch (error) {
            console.error('Error al subir la imagen', error);
        }
    };


    return (
        <PersonalizeContext.Provider value={{ imageURL, handleImageUpload, setSelectedImage, selectedImage }}>
            {children}
        </PersonalizeContext.Provider>
    )
}




