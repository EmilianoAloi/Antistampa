import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, product, price, img }) => {
    return (

        <Card className="cardBody text-center" style={{ width: '18rem' }}>
            <Card.Img className='img' variant="top" src={`../${img}`} alt={name} />
            <Card.Body >
                <Card.Title >{name}</Card.Title>
                <Card.Text className='price'>Precio: ${price}</Card.Text>
                <Button as={Link} to={`/item/${id}`} className='btn-1' >Ver Detalle </Button>
            </Card.Body>
        </Card>

    )
}

export default Item