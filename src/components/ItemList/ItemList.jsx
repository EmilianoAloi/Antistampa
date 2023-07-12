import Item from "../Item/Item"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ItemList = ({ products }) => {


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (


        // <Container>
        //     <Grid container sx={{ display: 'flex', justifyContent: 'center' }}  >
        //         {products.map(prod =>
        //             <Item key={prod.id} {...prod} />
        //         )};
        //     </Grid>
        // </Container>


        products.map(prod =>
            <Item key={prod.id} {...prod} />
        )



    )
}

export default ItemList




