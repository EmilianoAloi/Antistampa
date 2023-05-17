import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, price, img }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>ID: ${id}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default Item