import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="container">
        <div className="gridProducts row d-flex justify-content-center gap-5">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
        </div>
    )
}

export default ItemList