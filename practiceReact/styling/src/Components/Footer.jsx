import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function createData(name,  a, b, c) {
    return { name,  a, b, c };
  }


const rows = [
    createData('Facebook', 'Home', 'Mumbai', '1234567890'),
    createData('Instagram', 'Gallery', 'Pune', '1234567890'),
    createData('Twitter', 'Products', 'Noida', '1234567890'),
    createData('Linkedln', 'Contact','Mp', '1234567890'),
    // createData('Snapchat', 356, 16.0, 49),
  ];
export class Footer extends Component {
  
    render() {
        return (
            <div>
                 <TableContainer component={Paper} sx={{backgroundColor:"black"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell sx={{color:"white"}}>Social Media</TableCell>
            <TableCell sx={{color:"white"}} align="right">Menus</TableCell>
            <TableCell sx={{color:"white"}} align="right">Location</TableCell>
            <TableCell sx={{color:"white"}} align="right">Contact Us</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
          
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0,} }}
            >
              <TableCell component="th" scope="row" sx={{color:"white"}}>
                {row.name}
              </TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.a}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.b}</TableCell>
              <TableCell sx={{color:"white"}}  align="right">{row.c}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <AppBar position="static"  sx={{backgroundColor:"gray"}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 AmrutaKhamkar.com
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
            </div>
        )
    }
}

export default Footer
