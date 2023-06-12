import { Container } from '@mui/material'
import './WpWidget.css'

const WpWidget = () => {
    return (
        <>
            <Container>
                <a href="https://wa.me/5491164906306?text=Hola! Envianos tu consulta, en Antistampa te respondemos al instante!" target="_blank" rel="noopener noreferrer">
                    <img src="./img/walogo.png" alt="whatsapp" className='wpWidget' />
                </a>
            </Container>
        </>
    )
}

export default WpWidget