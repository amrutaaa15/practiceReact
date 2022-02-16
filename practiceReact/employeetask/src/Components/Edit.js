import axios from 'axios';
import React, { Component } from 'react'
import Add from './Add';
import Home from './Home';
// import data from '../products.json';


const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const URL = "  http://localhost:3000/employee";
export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proData: this.props.location.state,
            id: this.props.location.state.pro.id,
            Ename: this.props.location.state.pro.Ename,
            email: this.props.location.state.pro.email,
            Gender: this.props.location.state.pro.Gender,
            Age: this.props.location.state.pro.Age,
            Salary: this.props.location.state.pro.Salary,
            edit: 0,
            i: 0,

        }
    }

    componentDidMount() {
        document.getElementById("name").value = this.state.Ename
        document.getElementById("email").value = this.state.email
        document.getElementById("sal").value = this.state.Salary
        document.getElementById("gen").value = this.state.Gender
        document.getElementById("age").value = this.state.Age
        this.setState({ Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age, edit: 1, });
        console.log(this.state.proData)
        this.setState({ proData: this.state.proData })
    }
    update = (pro) => {

    }
    FinalUpdate = async (id) => {
        const URL = "  http://localhost:3000/employee";
        let formData = { id: this.state.i, Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age }
        this.setState({ edit: 0 })
        await axios.put(`http://localhost:3000/Employee/${id}`, formData)
        const res1 = await axios.get(URL)
        this.setState({ proData: res1.data })

        alert(" employee data Updated");
        document.getElementById("name").value = " "
        document.getElementById("email").value = " "
        document.getElementById("sal").value = " "
        document.getElementById("gen").value = " "
        document.getElementById("age").value = " "
    }
    catch(error) {
        console.log(error)

    }
    handler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <>
                {/* {console.log(this.state)} */}
                <div className="container">
                    <h2> Add Employee</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="Ename" id="name" className="form-control" onChange={this.handler} />

                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" id="email" className="form-control" onChange={this.handler} />

                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input type="text" name="Salary" id="sal" className="form-control" onChange={this.handler} />

                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <input type="text" name="Gender" id="gen" className="form-control" onChange={this.handler} />

                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="Age" id="age" className="form-control" onChange={this.handler} />


                        </div>
                        {
                            this.state.edit == 0 ?
                                <input type="button" value="Submit"  className="my-3" onClick={this.addProduct} className="btn btn-success" /> :
                                <input type="button" value="Finish Update" className="my-3" onClick={() => this.FinalUpdate(this.state.id)} className="btn btn-success" />
                        }
                    </form>

                </div>
            </>
        )
    }
}

export default Edit;