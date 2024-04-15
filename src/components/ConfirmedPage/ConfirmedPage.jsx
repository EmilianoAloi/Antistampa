import {  useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import emailjs from '@emailjs/browser';
import { Box, Typography, Stack } from "@mui/material";
import aprobado from '../../assets/aprobado.png';

const ConfirmedPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');


    const { cart, setError } = useContext(CartContext);
    const dataUserLS = localStorage.getItem("dataUser") ? JSON.parse(localStorage.getItem("dataUser")) : "";
    const { nombre, apellido, telefono, email, direccion, cp, envio, costoEnvio } = dataUserLS;

    useEffect(() => {
        if (status === "approved") {
            const sendEmail = async () => {
                try {
                    const productosInfo = cart.map(item => ({
                        Producto: item.item.product,
                        ID: `https://antistampa.netlify.app/item/${item.item.id}`,
                        Nombre: item.item.name,
                        Color: item.item.color,
                        Talle: item.item.talle,
                        Cantidad: item.qty,
                        Precio: `$${item.item.newTotal}`,
                    }));

                    const productosTextoPlano = JSON.stringify(productosInfo, null, 2)
                        .replace(/{|}/g, '') // Eliminar llaves
                        .replace(/"/g, '') // Eliminar comillas
                        .slice(1, -1)
                        .replace(/,{/g, '\n'); // Eliminar corchetes y formatear

     

                        const message = `
                        DATOS DE CONTACTO
                        Nombre: ${nombre}
                        Apellido: ${apellido}
                        Teléfono: ${telefono}
                        Email: ${email}
                        Dirección: ${direccion}
                        Código Postal: ${cp}
                        Envío: ${envio}
                        Costo de envio: $ ${costoEnvio}

                        DETALLE DE COMPRA:
                        ${productosTextoPlano}
                        `;


                    const templateParams = {
                        user_name: nombre,
                        user_email: email,
                        message: message,
                    };

                    const result = await emailjs.send('service_a5e785w', 'template_4hgsklr', templateParams, 'OkkSH4zZ0nAxiOUPi');
                    console.log(result.text);
               
                } catch (error) {
                    console.error('Error al enviar el correo electrónico:', error);
                    setError('Se produjo un error al enviar el correo electrónico, vuelva a intentar.');
                }
            };

            sendEmail();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {status === "approved" ? (
                <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
                    <Box sx={{ color: 'white', backgroundColor: '#0d0d0d', borderRadius: '30px', width: '30%', height: 'auto', padding: '2rem', paddingTop: '1rem', textAlign: 'center', }}>
                        <Stack sx={{ alignItems: 'center' }}>
                            <img src={aprobado} alt="aprobado" style={{ width: '40%' }} />
                        </Stack>
                        <Typography component='h3' fontWeight={500} sx={{ fontSize: '2rem' }}>¡Muchas gracias por tu compra!</Typography>
                        <Typography component='h3' fontWeight={200} sx={{ fontSize: '1.2rem', marginTop: '.2rem' }}>{nombre} {apellido}, tu pedido ha sido procesado.</Typography>
                        <Typography component='h3' fontWeight={500} sx={{ fontSize: '1rem', marginTop: '4rem' }}>En breve recibirás un correo de confirmación en tu correo electrónico: {email}.</Typography>
                    </Box>
                </Stack>
            ) : (
                <h1>Error</h1>
            )}
        </>
    );
}

export default ConfirmedPage;





// import { Box, Typography, Stack } from "@mui/material";
// import { useContext, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { CartContext } from '../Context/CartContext'
// // import { db } from "../../services/config";
// // import { collection, addDoc } from "firebase/firestore";
// import aprobado from '../../assets/aprobado.png'
// import emailjs from '@emailjs/browser';


// const ConfirmedPage = () => {

//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const status = searchParams.get('status');
//     console.log(status)

//     // eslint-disable-next-line
//     const { cart, shippingPrice, total, shippingOption, orderId, setOrderId, setError } = useContext(CartContext);

//     const [emailSent, setEmailSent] = useState(false);
//     const dataUserLS = localStorage.getItem("dataUser") ? JSON.parse(localStorage.getItem("dataUser")) : "";
//     const { nombre, apellido, telefono, email, direccion, cp, envio, costoEnvio } = dataUserLS;


//     const productosInfo = cart.map(item => {
//         return {
//             Producto: item.item.product,
//             ID: `https://antistampa.netlify.app/item/${item.item.id} `,
//             Nombre: item.item.name,
//             Color: item.item.color,
//             Talle: item.item.talle,
//             Cantidad: item.qty,
//             Precio: `$${item.item.newTotal}`,

//         };
//     });



//     const productosTextoPlano = JSON.stringify(productosInfo, null, 2);
//     const textoSinLlaves = productosTextoPlano.replace(/{|}/g, ''); // Eliminar llaves
//     const textoSinComillas = textoSinLlaves.replace(/"/g, ''); // Eliminar comillas
//     const textoFinal = textoSinComillas.slice(1, -1).replace(/,{/g, '\n'); // Eliminar corchetes y formatear


//     const message = `
//                         DATOS DE CONTACTO
//                         Nombre: ${nombre}
//                         Apellido: ${apellido}
//                         Teléfono: ${telefono}
//                         Email: ${email}
//                         Dirección: ${direccion}
//                         Código Postal: ${cp}
//                         Envío: ${envio}
//                         Costo de envio: $ ${costoEnvio}

//                         DETALLE DE COMPRA:
//                         ${textoFinal}
//                         `;


//     //////////////////////////// emailJs////////////////


//     const templateParams = {
//         user_name: nombre,
//         user_email: email,
//         message: message,
//     };



//     if (status === "approved" && !emailSent) {
//         emailjs.send('service_a5e785w', 'template_4hgsklr', templateParams, 'OkkSH4zZ0nAxiOUPi')
//             .then((result) => {
//                 console.log(result.text);
//                 // // Borrar localStorage después de enviar correos con éxito
//                 // setEmailSent(true);
//                 // localStorage.clear();
//             }, (error) => {
//                 console.log(error.text);
//             });
//     }


  

//     return (

//         <>

//             {status === "approved" ? (
//                 <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
//                     <Box sx={{ color: 'white', backgroundColor: '#0d0d0d', borderRadius: '30px', width: '30%', height: 'auto', padding: '2rem', paddingTop: '1rem', textAlign: 'center', }}>
//                         <Stack sx={{ alignItems: 'center' }}>
//                             <img src={aprobado} alt="aprobado" style={{ width: '40%' }} />
//                         </Stack>
//                         <Typography component='h3' fontWeight={500} sx={{ fontSize: '2rem' }}>¡Muchas gracias por tu compra!</Typography>
//                         <Typography component='h3' fontWeight={200} sx={{ fontSize: '1.2rem', marginTop: '.2rem' }}>{nombre} {apellido}, tu pedido ha sido procesado.</Typography>
//                         <Typography component='h3' fontWeight={500} sx={{ fontSize: '1rem', marginTop: '4rem' }}>En breve recibirás un correo de confirmación en tu correo electrónico: {email}.</Typography>
//                     </Box>
//                 </Stack>
//             ) : (
//                 <Typography component='h3' fontWeight={500} sx={{ fontSize: '2rem', color: "red"}}>¡Error!</Typography>
//             )}
//         </>

//     )
// }

// export default ConfirmedPage





//   /////////////////////////////////////////////////////


//     // const order = {
//     //     items: cart.map(prod => ({
//     //         id: prod.item.id,
//     //         prenda: prod.item.prenda,
//     //         producto: prod.item.product,
//     //         img: prod.item.img,
//     //         talle: prod.item.talle,
//     //         color: prod.item.color,
//     //         medidaEstampado: prod.item.estampado,
//     //         ubicacionEstampado: prod.item.ubicacion,
//     //         precio: prod.item.newTotal,
//     //         nombre: prod.item.name,
//     //         cantidad: prod.qty,

//     //     })),
//     //     total: cart.reduce((total, prod) => total + shippingPrice + prod.item.newTotal * prod.qty, 0),
//     //     name,
//     //     lastname,
//     //     tel,
//     //     email,
//     //     envio: { shippingOption, shippingPrice },
//     //     date: new Date()
//     // };



//     // addDoc(collection(db, 'ordenes'), order)
//     //     .then(docRef => {
//     //         setOrderId(docRef.id);
//     //     })
//     //     .catch(error => {
//     //         console.error('Error al crear la orden:', error.code, error.message);
//     //         setError('Se produjo un error al crear la orden, vuelva a intentar.');
//     //     })
