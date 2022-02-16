/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box>
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>


<div>
      <Typography component="legend">Controlled</Typography>
      <Rating
      
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled"  />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value"/>

      
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      
      </div>
</Box>
    
  );
}
