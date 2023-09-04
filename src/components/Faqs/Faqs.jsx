import { Typography, Container, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Faqs.css'




const Faqs = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (

        <>
            <Box sx={{ color: 'white', textAlign: 'center', margin: '0 auto', marginBottom: '3rem', boxShadow: ' rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;' }}>
                <Typography component='h2' fontWeight={700} className="heroTitle"
                    sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                    PREGUNTAS FRECUENTES</Typography>
            </Box>


            <Container>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel0a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} >¿Cómo comprar?  </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Elegís los productos que quieras y agregás al carrito de compras. Si elegís producto personalizado tenes que enviarnos tu.jpg por mail a antistampa@gmail.com. Ingresas al carrito y completas los datos de envio y pago.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} > ¿Cómo y cuáles son los medios de pago? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Tu compra podrá ser efectuada a través de los siguientes medios: <br /><br />

                            <strong>Mercado Pago</strong><br />
                            Es una plataforma segura que permite enviar y recibir dinero.
                            Los métodos de pago que Mercado Pago ofrece son: <br /><br />

                            1) Tarjetas de débito y crédito:<br />
                            Te permite pagar tu compra con una o dos tarjetas de crédito.<br />
                            Ofrece beneficios de financiación propia con varios bancos. Consultá las promociones estos beneficios aquí.<br /><br />

                            2) Pagos en efectivo a través de:<br />
                            RapiPago<br />
                            PagoFácil<br /><br />

                            Transferencia bancaria<br /><br />

                            Una vez realizada la orden, recibirás un correo con los datos de la cuenta bancaria.<br /><br />

                            Por favor envíanos un correo electrónico con el comprobante de la transferencia con el número de orden como referencia a antistampa@gmail.com para confirmar la recepción del pago y procesar tu pedido lo antes posible. Asegúrate de incluir el número de referencia del pedido en la transferencia bancaria para que podamos identificar tu pago con facilidad.<br /><br />

                            Si tenes alguna pregunta sobre los términos de pago o necesitas ayuda para realizar la transferencia, por favor no dudes en contactarnos a través de nuestro servicio de atención al cliente. Estaremos encantados de ayudarte en todo lo que necesites. Nuestro horario de atención es de Lunes a Viernes de 9 a 17hs.<br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>¿Se pueden hacer remeras personalizadas? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Si! Es muy simple, vas a la seccion Personalizados, elegis preferencias de tamaño de estampado, talle, color, prenda y subis la imagen que queres estampada y listo! Una vez hecho el pago a traves de MercadoPago. Nosotros nos contactamos con vos para coordinar en envio.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}> ¿Puedo elegir un diseño de remera para hacer en un buzo?  </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Si! Todos los diseños estan disponibles para hacer en remeras y buzos. Si no encontras lo que queres en la pagina, contactate con nosotros mediante la pagina web en la opcion contacto, mandanos un mail a antistampa@gmail.com o por whatsapp. Y a la brevedad nos comunicaremos para ver como personalizar lo que tengas en mente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}> ¿Puedo hacer la remera en otro color? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Todos los diseños estan disponibles para estampar sobre la remera del color que vos eligas!
                            
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}> ¿Cuánto tarda en llegar mi compra? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Los pedidos se despachan dentro de las 72 horas de confirmada la compra.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}> ¿Puedo retirar mi compra personalmente? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Si! Podes retirarlo de Lunes a Viernes por La Pampa 1480.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                    >
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}> ¿Hacen envios? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, color: 'rgba(255, 255, 255, 0.7)' }}>
                            Si! Podemos enviarte la prenda a traves de una moto dentro de AMBA y si sos del interior por correo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                

            </Container>
        </>
    )
}

export default Faqs





