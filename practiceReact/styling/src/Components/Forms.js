import React, { Component } from 'react';
import { Form,  Button,Container } from "react-bootstrap";
import Products from '../Products';

const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const regForPass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);
let pass;
export class Forms extends Component {
    constructor(props){
        super(props);
        this.state={
            errors:{
            Name:' ',
            email:'',
            Age:'',
            mobile:'',
            pass:'',
            cPass:''
        }
    }
}

    handler = (event) => {
        console.log(this.props.data)
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'Name':
                errors.Name = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
                break;
          
            case 'Age':
                errors.Age = (regForAge.test(value)) && (value <= 100) ? '' : '! age Should Contain number and below 100';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : '! Email is not valid';
                break;

            case 'pass':
                console.log(value)
                pass = value;

                if ((regForPass.test(value) && (value.length >= 8))) {
                    errors.pass = "";
                }
                else {
                    errors.pass = "Password Should Contain One Alphabetical letter one number one special character and length should greater than equal to 8"
                }

                break;
            case 'cPass':
                errors.cPass = pass !== value ? '! Password and confirm password must be same' : '';
                break;

            case 'mobile':
                errors.mobile = value.length === 10 ? '' : 'Phone number should contain 10 numbers';
                break;


            default:
                break;

        }
        this.setState({ errors: errors ,[name]:value})
    }


    render() {
        const { errors } = this.state;
        return (
            <div>
                <Container>
                    <h1>Registeration Form</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="Name" onChange={this.handler} placeholder="Enter Name" />
                    </Form.Group>
                    {errors.Name.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Name}</span>}<br />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={this.handler} placeholder="Enter email" />
                    </Form.Group>
                    {errors.email.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.email}</span>}<br />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" name="Mobile" onChange={this.handler} placeholder="Enter Mobile" />
                    </Form.Group>
                    {errors.mobile.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.mobile}</span>}<br />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" name="Age" onChange={this.handler} placeholder="Enter Age" />
                    </Form.Group>
                    {errors.Age.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.Age}</span>}<br />

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="pass" onChange={this.handler} placeholder="Password" />
                    </Form.Group>
                    {errors.pass.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.pass}</span>}<br />

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password"  name="cPass"onChange={this.handler}  placeholder=" Confirm Password" />
                    </Form.Group>
                    {errors.cPass.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.cPass}</span>}<br />

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> 
                </Form>
                </Container>
                <Products/>
            </div>
        )
    }
}

export default Forms
