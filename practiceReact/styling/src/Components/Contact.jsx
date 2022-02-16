import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="my-4">Contact Us here</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Your Age" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Your Mobile Number" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Your Address" variant="outlined" />
                    <TextField id="outlined-basic" label="Enter Your Feedback here " variant="outlined" />
                    
                </Box>
                    <Button className="mb-5" variant="contained">Submit</Button>
            </div>
        )
    }
}

export default Contact
