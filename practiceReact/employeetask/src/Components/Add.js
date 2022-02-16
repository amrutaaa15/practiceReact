import axios from 'axios';
import React, { Component } from 'react'
import { Redirect,Route } from 'react-router';
import Home from './Home';
// import data from '../products.json';


const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const URL = "  http://localhost:3000/employee";
export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proData: [], Ename: '', email: '', Salary: '', Gender: '', Age: '', edit: 0, i: 0,click:0,
            errors: {
                Ename: ' ',
                email: '',
                Salary: '',
                Gender: '',
                Age: '',
                gen: '',
                
            }
        }
    }
    handler = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'Ename':
                errors.Ename = regForName.test(value) ? '' : '! Name Should Contain Alphabets';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : '! Email is not valid';
                break;
            case 'Age':
                errors.Age = (regForAge.test(value)) && (value <= 100) ? '' : '! age Should Contain number and below 100';
                break;

            case 'Salary':
                errors.Salary = (regForAge.test(value)) ? '' : '! age Should Contain number and below 100';
                break;

            case 'Gender':
                let gend = ["Female", "Male", "Other"];
                errors.Gender = (value.includes(gend[0]) || value.includes(gend[1]) || value.includes(gend[2]) && value.length === 4) ? '' : 'only Female , Male or others are Allowed';
                break;

            default:
                break;

        }
        this.setState({ errors: errors, [name]: value })
    }

    componentDidMount = async () => {
        try {
            const URL = "  http://localhost:3000/employee";
            const res = await fetch(URL);
            const resData = await res.json();
            this.setState({ proData: resData })
        }
        catch (err) {
            console.log(err)
        }

    }


    addProduct = async (event) => {
        try {

            if (this.validate(this.state.errors)) {
                alert("Employee Added")
                const URL = "  http://localhost:3000/employee";
                let formData = { Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age };
                await axios.post(URL, formData);
                const res1 = await axios.get(URL)
                this.setState({ proData: res1.data })
                this.setState({click:this.state.click+1});
                console.log(this.state.click)
    
            }
            else {
                alert("Please Fill All fields Correctly");
                console.log(this.state.errors)
            }
           
        }
        catch (error) {
            console.log(error)
        }
        console.log(this.validate(this.state.errors));
        console.log(this.state.errors);
        document.getElementById("name").value = " "
        document.getElementById("email").value = " "
        document.getElementById("sal").value = " "
        document.getElementById("gen").value = " "
        document.getElementById("age").value = " "


    }

    update = (pro) => {
        document.getElementById("name").value = pro.Ename;
        document.getElementById("email").value = pro.email;
        document.getElementById("sal").value = pro.Salary;
        document.getElementById("gen").value = pro.Gender;
        document.getElementById("age").value = pro.Age;
        this.setState({ Ename: pro.Ename, email: pro.email, Salary: pro.Salary, Gender: pro.Gender, Age: pro.Age, edit: 1, i: pro.id });
        console.log(this.state.proData)
        this.setState({ proData: this.state.proData })

    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        // console.log(errors);
        // console.log(valid);
        console.log(Object.values(errors))
        return valid;
    }

    FinalUpdate = async (id) => {
        const URL = "  http://localhost:3000/employee";
        let formData = { id: this.state.i, Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age }
        this.setState({ edit: 0 })
        await axios.put(`http://localhost:3000/Employee/${id}`, formData)
        const res1 = await axios.get(URL)
        this.setState({ proData: res1.data })

        alert(" employee data Updated");
    }
    catch(error) {
        console.log(error)

    }


    render() {
        let errors = this.state.errors;
        return (
            <>
                <div className="container">
                    <h2> Add Employee</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="Ename" id="name" className="form-control" onChange={this.handler} />
                            {errors.Ename.length > 0 &&
                                <span style={{ color: 'red' }}>{errors.Ename}</span>}<br />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" id="email" className="form-control" onChange={this.handler} />
                            {errors.email.length > 0 &&
                                <span style={{ color: 'red' }}>{errors.email}</span>}<br />
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input type="text" name="Salary" id="sal" className="form-control" onChange={this.handler} />
                            {errors.Salary.length > 0 &&
                                <span style={{ color: 'red' }}>{errors.Salary}</span>}<br />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text" name="Gender" id="gen" className="form-control" onChange={this.handler} />
                            {errors.Gender.length > 0 &&
                                <span style={{ color: 'red' }}>{errors.Gender}</span>}<br />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="Age" id="age" className="form-control" onChange={this.handler} />
                            {errors.Age.length > 0 &&
                                <span style={{ color: 'red' }}>{errors.Age}</span>}<br />

                        </div>
                        {
                            this.state.edit == 0 ?
                                <input type="button" value="Submit" onClick={this.addProduct} className="btn btn-success" /> :
                                <input type="button" value="Finish Update" onClick={() => this.FinalUpdate(this.state.i)} className="btn btn-success" />
                        }
                    </form>

                </div>
            </>
        )
    }
}

export default Add;