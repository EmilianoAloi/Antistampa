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
                    <Grid item xs={12} sm={6} md={3}
                    >
                        <Item key={prod.id} {...prod} />
                    </Grid>
                )};



            </Grid>
        </Container>



    )
}

export default ItemList


{/* <div className="container">
<div className="gridProducts row d-flex justify-content-center gap-5">
</div>
</div> */}


// sx={{
//     display: 'flex',
//     flexDirection: 'row'
// }}

// item xs={12} sm={6} md={3} 