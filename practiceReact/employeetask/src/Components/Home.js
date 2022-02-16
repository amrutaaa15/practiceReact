import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import data from '../products.json';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], Ename: '', email: '', Salary: '', Gender: '', Age: '', edit: 0, i: 0, pro: [] };
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

    delete = async (id) => {
        try {
            const URL = "  http://localhost:3000/employee";
            await axios.delete(URL + '/' + id)
            const res1 = await axios.get(URL)
            this.setState({ proData: res1.data })

        }
        catch (error) {
            console.log(error)
        }

    }

    update = (pros) => {
        this.props.method(pros);
    }
    render() {
        return (
            <>
                <div className="row container my-5 mx-auto">
                    <h1 className="text-center">Employee Details</h1>
                    <table border="1" className="bg-dark text-white" >

                        <tr style={{border:"2px solid white",borderColor:"white"}}>
                            <th className="text-white py-3">Employee Name</th>
                            <th className="text-white py-3">Email</th>
                            <th className="text-white py-3">Salary</th>
                            <th className="text-white py-3">Gender</th>
                            <th className="text-white py-3">Age</th>
                            <th className="text-white py-3">Action</th>
                        </tr>
                        {this.state.proData.map(pro =>
                            <tr style={{border:"2px solid white",borderColor:"white"}}>
                                <td className="py-3" key={Math.random()} >{pro.Ename}</td>
                                <td className="py-3" key={Math.random()} >{pro.email}</td>
                                <td className="py-3" key={Math.random()} >{pro.Salary}</td>
                                <td className="py-3" key={Math.random()} >{pro.Gender}</td>
                                <td className="py-3" key={Math.random()} >{pro.Age}</td>
                                <td className="py-3" key={Math.random()} > <button key={Math.random()} class="btn btn-danger mx-2" onClick={() => this.delete(pro.id)}>Delete</button>
                                    <Link
                                        className="btn btn-primary"
                                        to={{
                                            pathname: '/edit',
                                            state:{ pro:pro}
                                           
                                        }}
                                    >
                                        Update
                                    </Link>
                                    <Link to={`/details/${pro.id}`}>Details</Link>
                                    </td>
                            </tr>
                        )}
                    </table>
                </div>
            </>
        )
    }

}


export default Home;