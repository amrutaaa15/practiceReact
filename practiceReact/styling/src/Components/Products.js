import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import json from './Products.json';
import Contact from './Contact';

export class Products extends Component {
    render() {
        return (
            <>
             <div>
                 <h1>Products</h1>
                <Grid container spacing={4}>
                    {json.Products.map((p)=>
                     <Grid item xs={2}>
                     <Card sx={{ maxWidth: 1500, Height: 500 }}>
                         <CardMedia
                             component="img"
                             height="240"
                             image={p.imgsrc}
                             alt="green iguana"
                         />
                         <CardContent>
                             <Typography gutterBottom variant="h5" component="div">
                              {p.ProductName}
                             </Typography>
                             <Typography variant="body2" color="text.secondary">
                                Price:{p.Price}
                                Quantity:{p.Quantity}
                             </Typography>
                         </CardContent>
                     </Card>
                 </Grid>
                    )
                   
    }
                    </Grid>
                    
            </div>
           
            </>
        )
    }
}

export default Products
