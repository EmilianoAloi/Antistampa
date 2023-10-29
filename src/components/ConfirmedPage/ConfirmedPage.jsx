import { Box, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
// import { db } from "../../services/config";
// import { collection, addDoc } from "firebase/firestore";
import aprobado from '../../assets/aprobado.png'
import { useRef } from "react";
import emailjs from '@emailjs/browser';



const ConfirmedPage = () => {


    // eslint-disable-next-line
    const { cart, shippingPrice, total, shippingOption, orderId, setOrderId, setError } = useContext(CartContext);


    const dataUserLS = JSON.parse(localStorage.getItem("dataUser"));
    const { nombre, apellido, telefono, email, direccion, cp, envio, costoEnvio } = dataUserLS;

    console.log(cart[0].item.id)
    console.log(cart[0].item.name)

    console.log(cart[0].item.color)


    const productosInfo = cart.map(item => {
        return {
            ID: `https://antistampa.netlify.app/item/${item.item.id} `,
            Producto: item.item.product,
            Nombre: item.item.name,
            Color: item.item.color,
            Talle: item.item.talle,
            Cantidad: item.qty,
            Precio: `$${item.item.newTotal}`,

        };
    });


    console.log(productosInfo)

    const productosTextoPlano = JSON.stringify(productosInfo, null, 2);
    const textoSinLlaves = productosTextoPlano.replace(/{|}/g, ''); // Eliminar llaves
    const textoSinComillas = textoSinLlaves.replace(/"/g, ''); // Eliminar comillas
    const textoFinal = textoSinComillas.slice(1, -1).replace(/,{/g, '\n'); // Eliminar corchetes y formatear


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

${textoFinal}


`;






    //////////////////////////// emailJs////////////////



    //  ID: ${cart[0].item.id}
    //  Producto: ${cart[0].item.product}
    //  Nombre: ${cart[0].item.name}
    //  Color: ${cart[0].item.color}
    //  Talle:  ${cart[0].item.talle}

    //  Modelo: "Blur"
    //  Imagen: "https://firebasestorage.googleapis.com/v0/b/ecommerce-agus.appspot.com/o/imgProducts%2F8c54e0c8-d597-41a7-8939-8b290f369b77.jpg?alt=media&token=1d447069-9731-4cec-86da-f10724e6dafe.jpg"
    //  Precio: 7000


    const formClient = useRef();
    const sendEmailClient = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a5e785w', 'template_4hgsklr', formClient.current, 'OkkSH4zZ0nAxiOUPi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // const formClient = useRef();
    // const sendEmailClient = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_a5e785w', 'template_erskmfp', {cart} , 'OkkSH4zZ0nAxiOUPi')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };




    /////////////////////////////////////////////////////


    // const order = {
    //     items: cart.map(prod => ({
    //         id: prod.item.id,
    //         prenda: prod.item.prenda,
    //         producto: prod.item.product,
    //         img: prod.item.img,
    //         talle: prod.item.talle,
    //         color: prod.item.color,
    //         medidaEstampado: prod.item.estampado,
    //         ubicacionEstampado: prod.item.ubicacion,
    //         precio: prod.item.newTotal,
    //         nombre: prod.item.name,
    //         cantidad: prod.qty,

    //     })),
    //     total: cart.reduce((total, prod) => total + shippingPrice + prod.item.newTotal * prod.qty, 0),
    //     name,
    //     lastname,
    //     tel,
    //     email,
    //     envio: { shippingOption, shippingPrice },
    //     date: new Date()
    // };



    // addDoc(collection(db, 'ordenes'), order)
    //     .then(docRef => {
    //         setOrderId(docRef.id);
    //     })
    //     .catch(error => {
    //         console.error('Error al crear la orden:', error.code, error.message);
    //         setError('Se produjo un error al crear la orden, vuelva a intentar.');
    //     })


    return (

        <>

            <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
                <Box sx={{ color: 'white', backgroundColor: '#0d0d0d', borderRadius: '30px', width: '30%', height: 'auto', padding: '2rem', paddingTop: '1rem', textAlign: 'center', }}>


                    <Stack sx={{ alignItems: 'center' }}>
                        <img src={aprobado} alt="aprobado" style={{ width: '40%' }} />
                    </Stack>

                    <Typography component='h3' fontWeight={500} sx={{ fontSize: '2rem' }}>Muchas gracias por tu compra!</Typography>
                    <Typography component='h3' fontWeight={200} sx={{ fontSize: '1.2rem', marginTop: '.2rem' }}>{nombre} {apellido}, tu pedido ha sido procesado.</Typography>

                    <Stack direction='row' justifyContent='center' alignItems='end' gap={1} >
                        <Typography component='h3' sx={{ fontSize: '1rem' }}>N de Orden:</Typography>
                        <Typography component='h3' fontWeight={600} sx={{ fontSize: '1.5rem', lineHeight: '1.2', marginTop: '3rem' }}>4545121221 {orderId} </Typography>
                    </Stack>

                    <Typography component='h3' fontWeight={500} sx={{ fontSize: '1rem', marginTop: '4rem' }}>En breve recibiras un correo de confirmacion a tu mail: {email}.</Typography>


                </Box>


                <Stack color="white">
                    <form ref={formClient} onSubmit={sendEmailClient}>
                        <input type="text" name="user_name" value={nombre} readOnly />
                        <input type="email" name="user_email" value={email} readOnly />
                        <textarea name="message" defaultValue={message} />
                        <input type="submit" value="Send" />
                    </form>
                </Stack>

            </Stack>


        </>

    )
}

export default ConfirmedPage