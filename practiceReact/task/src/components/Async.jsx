import axios from 'axios';
import React, { Component } from 'react'
// import data from '../products.json';
const URL = "  http://localhost:3000/employee";
export class Async extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], Ename: '', email: '', Salary: '', Gender: '', Age: '', edit: 0, i: 0 };
    }
    handler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
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
            const URL = "  http://localhost:3000/employee";
            let formData = { Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age };
            await axios.post(URL, formData);
            const res1 = await axios.get(URL)
            this.setState({ proData: res1.data })
            alert("Employee Added");

        }
        catch (error) {
            console.log(error)
        }
    }


    delete = async (id) => {
        try {
            const URL = "  http://localhost:3000/employee";
            await axios.delete(URL + '/' + id)
            const res1 = await axios.get(URL)
            this.setState({ proData: res1.data })
            alert("Employeee details deleted successfully")

        }
        catch (error) {
            console.log(error)
        }

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
        return (
            <>
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
                                <input type="button" value="Submit" onClick={this.addProduct} className="btn btn-success" /> :
                                <input type="button" value="Finish Update" onClick={() => this.FinalUpdate(this.state.i)} className="btn btn-success" />
                        }
                    </form>
                </div>
              <div className="row container my-3">
            <table border="2">

            <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            
                {this.state.proData.map(pro =>
                    <tr>
                         <td key={Math.random()} >{pro.Ename}</td>
                         <td key={Math.random()} >{pro.email}</td>
                         <td key={Math.random()}>{pro.Salary}</td>
                         <td key={Math.random()}>{pro.Gender}</td>
                         <td key={Math.random()}>{pro.Age}</td>
                         <td key={Math.random()} > <button key={Math.random()}class="btn btn-danger mx-2" onClick={() => this.delete(pro.id)}>Delete</button>
                               <button key={Math.random()}class="btn btn-success" onClick={() => this.update(pro)}>Update</button></td>
                    </tr>
                )}
                </table>
            </div>
            </>
        )
    }
}

export default Async;