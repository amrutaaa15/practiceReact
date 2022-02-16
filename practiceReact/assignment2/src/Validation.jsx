import React, { Component } from 'react';
import './vali.css'

const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
let pass;
export class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            errors: {
                name: ' ',
                email: ' ',
                age: ' ',
                password: ' ',
                confirmPassword: ' ',
                mobile: ' ',
            }
        }
    }


    handler = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'name':
                errors.name = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
            case 'age':
                errors.age = (regForAge.test(value)) && (value <= 100) ? '' : '! age Should Contain number and below 100';
            case 'email':
                errors.email = regForEmail.test(value) ? '' : '! Email is not valid';
                break;
            case 'password':
                pass=value;
                errors.password = value.length < 8 ? '! Password must me 8 chanrater long' : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = pass!= value? '! Password and confirm password must be same' : '';
                break;

            case 'mobile':
                errors.mobile = value.length == 10 ? '' : 'Phone number should contain 10 numbers';
                break;

        }
        this.setState({ errors:errors, [name]: value })
    }
    formSubmit = (event) => {
        let {arr,name,email,age,password,confirmPassword,mobile}=this.state;
        console.log(this.state.arr)
        event.preventDefault();
        console.log(this.validate(this.state.errors))
        if (this.validate(this.state.errors)) {
            alert("Valid Form");
            this.setState({arr:[...arr,{name:name,email:email,age:age,password:password,confirmPassword:confirmPassword,mobile:mobile}]})
        }
        else {
            alert("Invalid Form");
        }
    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        console.log(errors);
        // console.log(valid)
        return valid;
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
               
                <div className="flex">
                <form className="form" onSubmit={this.formSubmit}>

                    <label>Name :</label> <input type="text" name="name" onChange={this.handler} /><br></br>
                    {errors.name.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.name}</span>}<br />

                    <label>Email :</label> <input type="text" name="email" onChange={this.handler} /><br></br>
                    {errors.email.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.email}</span>}<br />

                    <label>Age :</label> <input type="text" name="age" onChange={this.handler} /><br></br>
                    {errors.age.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.age}</span>}<br />

                   <label>Password :</label>  <input type="password" name="password" onChange={this.handler} /><br></br>
                    {errors.password.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.password}</span>}<br />

                    <label>Confirm Password :</label> <input type="password" name="confirmPassword" onChange={this.handler} /><br></br>
                    {errors.confirmPassword.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.confirmPassword}</span>}<br />

                    <label>Mobile Number :</label> <input type="text" name="mobile" onChange={this.handler} /><br></br>
                    {errors.mobile.length > 0 &&
                        <span style={{ color: 'yellow' }}>{errors.mobile}</span>}<br />

                    <button className="btn">Submit</button>
                </form>

                <table className="table" border="3">
                    <thead>
                        <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Mobile Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.arr.map((task, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.name}</td>
                                <td>{task.email}</td>
                                <td>{task.age}</td>
                                <td>{task.password}</td>
                                <td>{task.confirmPassword}</td>
                                <td>{task.mobile}</td>
                                
                            </tr>

                        })}
                    </tbody>

                </table>
            </div>
            </div>
        )
                    }}

export default Validation
