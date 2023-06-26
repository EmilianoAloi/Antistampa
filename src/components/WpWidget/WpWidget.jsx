import { Container } from '@mui/material'
import './WpWidget.css'
import logoWp from '../../assets/walogo.png'

const WpWidget = () => {
    return (
        <>

            <Container>
                <a href="https://wa.me/5491144034628?text=Hola! Envianos tu consulta, en Antistampa te respondemos al instante!" target="_blank" rel="noopener noreferrer">
                    <img src={logoWp} alt="whatsapp" className='wpWidget' />
                </a>
            </Container>
        </>
    )
}

export default WpWidget