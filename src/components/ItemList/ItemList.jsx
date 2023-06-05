import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"


const ItemList = ({ products }) => {
    
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
                        <Item key={prod.id} {...prod} />
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