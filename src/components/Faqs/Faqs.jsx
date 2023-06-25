import { Typography, Container, Stack } from '@mui/material'
import React from 'react'

const Faqs = () => {
    return (

        <>

            <Typography color='#F4BF00' fontWeight={500} margin={5} sx={{ fontSize: {xs:'1.3rem', md:'3rem'}, textAlign: {xs:'center', md:'start'} }} >PREGUNTAS FRECUENTES</Typography>

            <Container>


                <Stack gap={2} color='white'>

                    <Typography sx={{ fontSize: '2rem' }}> ¿Cómo comprar? </Typography>

                    <Typography sx={{ fontSize: '' }}>

                        Elegís los productos que quieras y agregás al carrito de compras. Si elegís producto personalizado tenes que enviarnos tu.jpg por mail a antistampa@gmail.com. Ingresas al carrito y completas los datos de envio y pago. Realizás el pago por el medio que prefieras (crédito, débito o efectivo) y listo! te enviamos tu pedido.

                    </Typography>


                    <Typography sx={{ fontSize: '2rem' }}>¿Se pueden hacer remeras personalizadas? </Typography>

                    <Typography sx={{ fontSize: '' }}>

                        Si! Es muy simple nos mandas tu imagen en formato .jpg al mail antistampa@gmail.com nos detallas el color y talle de tu remera y listo! Nosotros nos contactamos con vos para coordinar en envio y forma de pago.
                    </Typography>



                    <Typography sx={{ fontSize: '2rem' }}> ¿Puedo elegir un diseño de remera para hacer en un buzo?  </Typography>
                    <Typography >

                        Si! Todos los diseños estan disponibles para hacer en remeras, remeras de niños y buzos. Si no encontras lo que queres en la pagina, contactate con nosotros mediante la pagina web en la opcion contacto, mandanos un mail a antistampa@gmail.com o por whatsapp. Y a la brevedad nos comunicaremos para ver como personalizar lo que tengas en mente.
                    </Typography>




                    <Typography sx={{ fontSize: '2rem' }}> ¿Puedo hacer la remera en otro color? </Typography>

                    <Typography sx={{ fontSize: '' }}>

                        Todos los diseños estan disponibles para estampar sobre la remera del color que vos eligas!
                        ¡Todos los medios de pago. Trabajamos con mercadopago, así que podés pagar como quieras, con tarjetas, transferencia o en efectivo en rapipago o pagofacil.
                    </Typography>
                </Stack>

            </Container>

        </>


    )
}

export default Faqs