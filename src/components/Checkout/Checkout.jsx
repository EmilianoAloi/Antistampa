import { useState, useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

    const { cart, emptyCart, total } = useContext(CartContext);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState();
    const [orderId, setOrderId] = useState();


    const handleForm = (e) => {
        e.preventDefault();
        if (!name || !lastname || !tel || !email || !emailConfirm) {
            setError('Por favor llena toods los campos');
            return;
        }

        if (email !== emailConfirm) {
            setError('Los campos de email no coinciden');
            return
        }

        const order = {
            items: cart.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.name,
                cantidad: prod.qty
            })),
            total: cart.reduce((total, prod) => total + prod.item.price * prod.qty, 0),
            name,
            lastname,
            tel,
            email,
            date: new Date()
        };

        addDoc(collection(db, 'ordenes'), order)
            .then(docRef => {
                setOrderId(docRef.id);
                emptyCart();
            })

            .catch(error => {
                setError('Se produjo un error al crear la orden, vuelva a intentar.');
            })
    }





    return (

        <>
            <h2>Checkout</h2>
            <form onSubmit={handleForm}>
                {cart.map(prod => (
                    <div key={prod.item.id}>
                        <p>
                            {prod.item.name} x {prod.qty}
                        </p>
                        <p> Precio $: {prod.item.price}</p>
                    </div>
                ))}
                <p>Total Compra: ${total}</p>

                <label>Nombre</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Apellido</label>
                <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} required />

                <label>Telefono</label>
                <input type='tel' value={tel} onChange={(e) => setTel(e.target.value)} required />

                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Confirmar email</label>
                <input type='email' value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />

                {error && <p>{error}</p>}
                <button type='submit'>Finalizar compra</button>

            </form>

            {
                orderId && (<p> Gracias por tu compra, tu numero de orden es {orderId}</p>)
            }
        </>
    )
}

export default Checkout