import React, { Component } from 'react';
import Myhoc from './hoc/Myhoc';
import './vali.css'

const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const regForPass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);
const regRepeat = RegExp(/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)+/ig);
let pass, nameVal, names;
export class PassValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
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
        console.log(this.props.data)
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'name':
                nameVal = value;
                console.log(nameVal)
                names = nameVal.split(" ");
            
                console.log(names)
                errors.name = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
                break;
            case 'age':
                errors.age = (regForAge.test(value)) && (value <= 100) ? '' : '! age Should Contain number and below 100';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : '! Email is not valid';
                break;
            case 'password':
                console.log(value)
                // console.log(value.includes(names[0]));
                // console.log(value.includes(names[1]));
                pass = value;
                console.log(nameVal);
        
                if ((regForPass.test(value) && (!value.includes(names[0])) && (!value.includes(names[1])) && (regRepeat.test(value) == false) && (value.length >= 8))) {
                    errors.password = "";
                }
                else {
                    errors.password = "Password Should Contain One Alphabetical letter one number one special character and it should not contain your name and sequeantial characters and length should greater than equal to 8"
                }

                break;
            case 'confirmPassword':
                errors.confirmPassword = pass != value ? '! Password and confirm password must be same' : '';
                break;

            case 'mobile':
                errors.mobile = value.length == 10 ? '' : 'Phone number should contain 10 numbers';
                break;

        }
        this.setState({ errors: errors, [name]: value })
    }
    formSubmit = (event) => {
        let { arr, name, email, age, password, confirmPassword, mobile } = this.state;
        event.preventDefault();
        console.log(this.validate(this.state.errors))
        if (this.validate(this.state.errors)) {
            alert("! Form Submitted Successfully and Your data is rendered Properly");
            this.setState({ arr: [...arr, { "name": name, "email": email, "age": age, "password": password, "confirmPassword": confirmPassword, "mobile": mobile }] })
            console.log(this.state.arr);
            document.getElementById("name").value='';
            document.getElementById("email").value='';
            document.getElementById("age").value='';
            document.getElementById("pass").value='';
            document.getElementById("Cpass").value='';
            document.getElementById("mob").value='';
        }
        else {
            alert("Please Fill All fields Correctly");
        }
    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        console.log(errors);
        console.log(valid)
        return valid;
    }
    toggle = () => {
        let pass = document.getElementById("pass");
        let Cpass = document.getElementById("Cpass");
        let check = document.getElementById("check");

        if (check.checked) {
            pass.type = "text";
            Cpass.type = "text";
        }
        else {
            pass.type = "password";
            Cpass.type = "password";
        }
    }
   
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="flex">
                    <form className="form" onSubmit={this.formSubmit}>
                    <h1 style={{ color: 'yellow' }} >{this.props.data}</h1>

                        <label>Name :</label> <input type="text" name="name" id="name" onChange={this.handler} /><br></br>
                        {errors.name.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.name}</span>}<br />

                        <label>Email :</label> <input type="text" name="email" id="email" onChange={this.handler} /><br></br>
                        {errors.email.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.email}</span>}<br />

                        <label>Age :</label> <input type="text" name="age" id="age" onChange={this.handler} /><br></br>
                        {errors.age.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.age}</span>}<br />

                        <label>Password :</label>  <input type="password" name="password" id="pass" onChange={this.handler} /><br></br>
                        {errors.password.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.password}</span>}<br />

                        <label>Confirm Password :</label> <input type="password" id="Cpass" name="confirmPassword" onChange={this.handler} /><br></br>
                        {errors.confirmPassword.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.confirmPassword}</span>}<br />

                        <label>Mobile Number :</label> <input type="text" name="mobile" id="mob" onChange={this.handler} /><br></br>
                        {errors.mobile.length > 0 &&
                            <span style={{ color: 'yellow' }}>{errors.mobile}</span>}<br />

                        <div className="box">

                            <input type="checkbox" onChange={this.toggle} name="" id="check" style={{ boder: "2px solid white", position: "relative", top: "-20px", fontSize: "18px" }} />
                            <span style={{ color: "white", position: "relative", top: "-20px", left: "12px" }}>Show Password</span>
                        </div>
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
    }
}

export default Myhoc(PassValidation);
