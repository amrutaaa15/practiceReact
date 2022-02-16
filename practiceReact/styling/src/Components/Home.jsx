import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Gallery from './Gallery';
import Products from './Products';
import Contact from './Contact';


class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
      <>
    <Card sx={{ maxWidth: 1500 ,Height:500 }}>
    <CardMedia
      component="img"
      height="540"
      image="../IMGS/img1.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Choose the Nature Always
      </Typography>
      <Typography variant="body2" color="text.secondary">
      "Nature" refers to the phenomena of the physical world, and also to life in general. ... The term is often refers to the "natural environment" or wilderness—wild animals, rocks, forest, beaches, and in general areas that have not been substantially altered by humans, or which persist despite human intervention.
      </Typography>
    </CardContent>
  </Card>
  <Gallery/>
  <Products/>
  <Contact/>
  </>
  )
}
}
export default Home