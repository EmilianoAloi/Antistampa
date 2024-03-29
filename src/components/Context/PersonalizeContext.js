import { useState, createContext } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/config';


export const PersonalizeContext = createContext();

export const PersonalizeProvider = ({ children }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleImageUpload = async () => {
        try {
            // Subir la imagen al almacenamiento de Firebase
            const storageRef = ref(storage, `imgPrint/${selectedImage.name}`);
            await uploadBytes(storageRef, selectedImage);

            // Obtener la URL de descarga de la imagen y guardarla en estado
            setImageURL(getDownloadURL(storageRef))


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




