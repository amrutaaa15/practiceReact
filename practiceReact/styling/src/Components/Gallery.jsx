import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import json from './img.json'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Products from './Products';

export class Gallery extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(json.img)
        return (
            <>
                <h1>Gallery</h1>
                <Grid container spacing={2}>
                    {json.img.map((p)=>
                     <Grid item xs={3}>
                     <Card sx={{ maxWidth: 1500, Height: 500 }}>
                         <CardMedia
                             component="img"
                             height="240"
                             image={p.img1}
                             alt="green iguana"
                         />
                         <CardContent>
                             <Typography gutterBottom variant="h5" component="div">
                                 Nature
                             </Typography>
                             <Typography variant="body2" color="text.secondary">
                             "Nature" refers to the phenomena of the physical world, and also to life in general. ... The term is often refers to the "natural environment" or wilderness—wild animals, rocks, forest, beaches, and in general areas that have not been substantially altered by humans, or which persist despite human intervention.
                             </Typography>
                         </CardContent>
                     </Card>
                 </Grid>
                    )
                   
    }
                    </Grid>

            </>
        )
    }
}

export default Gallery
