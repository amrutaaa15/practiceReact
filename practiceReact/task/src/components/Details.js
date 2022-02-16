import React, { Component } from 'react'
// import data from '../products.json';
export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], Ename: '', email: '', Salary: '', Gender: '', Age: '', edit: 0, i: 0 };
    }
    handler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    componentDidMount() {
        const URL = "http://localhost:3000/Employee";
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ proData: data })
            })
            this.setState({proData:this.state.proData})

    }

    addProduct = (event) => {
        console.log("hie")
        event.preventDefault();
        let formData = { Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age };
        const URL = "http://localhost:3000/Employee/";
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                alert("Emploee Added");

                fetch(URL)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        this.setState({ proData: data })
                    })
            })
            document.querySelectorAll('input').forEach(element => {
                element.value = '';
            });
    }

    delete = (id) => {
        console.log("delete")
        fetch(`http://localhost:3000/Employee/${id}`, {
            method: "Delete"
        })
        const URL = "http://localhost:3000/Employee";
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ proData: data })
            })
       
    }
    update = (pro) => {
        document.getElementById("name").value = pro.Ename;
        document.getElementById("email").value = pro.email;
        document.getElementById("sal").value = pro.Salary;
        document.getElementById("gen").value = pro.Gender;
        document.getElementById("age").value = pro.Age;
        this.setState({ Ename:  pro.Ename, email:  pro.email, Salary:  pro.Salary, Gender: pro.Gender, Age: pro.Age, edit: 1, i: pro.id });
        console.log(this.state.proData)
        this.setState({proData:this.state.proData})
        
    }

    FinalUpdate = (id) => {
         URL = `http://localhost:3000/Employee/${id}`;
            let formData={ id:this.state.i, Ename: this.state.Ename, email: this.state.email, Salary: this.state.Salary, Gender: this.state.Gender, Age: this.state.Age}
            this.setState({edit:0})
           
            fetch(URL, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json"
                }     
            }) 
             URL = "http://localhost:3000/Employee";
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({ proData: data })
                })
           
    document.querySelectorAll('input').forEach(element => {
        element.value = '';
    });
   
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
                            <input type="button" value="Submit"  onClick={this.addProduct}className="btn btn-success" /> :
                            <input type="button" value="Finish Update" onClick={() => this.FinalUpdate(this.state.i)} className="btn btn-success" />
                    }
                </form>
            </div>
            <div className="row container">
            <table class="table-dark" border="2">

            <tr class="table-success">
                <th>Employee Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </table>
                {this.state.proData.map(pro =>
                    // <div key={Math.random()}className="col-sm-4">
                    //     <div key={Math.random()}class="card" >
                    //         <div key={Math.random()}class="card-body" style={{ width: "15rem" }}>
                    //             <h5 key={Math.random()}class="card-title">{pro.Ename}</h5>
                    //             <p key={Math.random()}class="card-text">
                    //                 Email : <i>{pro.email}</i><br />
                    //                 Salary : <i>{pro.Salary}</i><br />
                    //                 Gender : <i>{pro.Gender}</i><br />
                    //                 Age : <i>{pro.Age}</i><br />
                    //             </p>
                    //             <button key={Math.random()}class="btn btn-danger mx-2" onClick={() => this.delete(pro.id)}>Delete</button>
                    //             <button key={Math.random()}class="btn btn-success" onClick={() => this.update(pro)}>Update</button>
                    //         </div>
                    //     </div>
                    // </div>
                    
                    <tr>
                         <td key={Math.random()} class="table-dark">{pro.Ename}</td>
                         <td key={Math.random()} class="table-dark">{pro.email}</td>
                         <td key={Math.random()} class="table-dark">{pro.Salary}</td>
                         <td key={Math.random()} class="table-dark">{pro.Gender}</td>
                         <td key={Math.random()} class="table-dark">{pro.Age}</td>
                         <td key={Math.random()} class="table-dark"> <button key={Math.random()}class="btn btn-danger mx-2" onClick={() => this.delete(pro.id)}>Delete</button>
                               <button key={Math.random()}class="btn btn-success" onClick={() => this.update(pro)}>Update</button></td>
                    </tr>
                )}
            </div>
        </>
    )
}
}

export default Products
