import './ItemDetail.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, name, price, img }) => {
    return (
        <div className='itemContainer'>
            <h2 className='detailTitle'>DETALLES DE PRODUCTO</h2>
                 <h3 className='productTitle'>Remeras Ultrapremium de algodón 24.1 Peinado. </h3>
            <p>
                Costura Reforzada en hombro y sisa. <br/>  
                Talles reales par adultos: Desde XS hasta XXXL.<br/>
                Talles de Niños: Desde el 2 al 14.<br/>
                Colores: 30 disponibles.<br/>
                En Antistampa no vemos género, por ende todas nuestras prendas son unisex.
            </p>
            <Card className="cardBody text-center" style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src={img} alt={name} />
                <Card.Body >
                    <Card.Title >{name}</Card.Title>
                    <Card.Text className='price'>Precio: ${price}</Card.Text>
                    <Button className='btn-1' >Agregar a Carrito </Button>
                </Card.Body>
            </Card>
       

        </div>
    )
}

export default ItemDetail