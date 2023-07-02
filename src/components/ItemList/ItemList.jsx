import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ItemList = ({ products }) => {


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (


        <Container>
            <Grid 
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                
            >
                {products.map(prod =>
                    <Item  key={prod.id} {...prod} />
                )};

            </Grid>
        </Container>



    )
}

export default ItemList





// sx={{
//     display: 'flex',
//     flexDirection: 'row'
// }}

// item xs={12} sm={6} md={3} 