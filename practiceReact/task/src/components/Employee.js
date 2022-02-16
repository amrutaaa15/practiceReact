import React, { Component } from 'react'

export class Employee extends Component {
    constructor() {
        super();
        this.state = {
            empData: [],
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/Employee";
        let i = 3;
        i++;
        const data = { Ename: "dad", email: "amruta.khamkar@gmail.com", Salary: 646457 , Gender: "M",Age: 22};
        
        fetch(url, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
            }) .catch((err) => {
                console.log(err)
            });
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ empData:data });
                console.log(this.state.empData)
            })
            .catch((err) => {
                console.log(err)
            });


    //     let Data = {"Ename": "mommy", "email": "amruta.khamkar@gmail.com", "Salary": 646457 , "Gender": "M",'Age': 22};
    //     // let id=4;
      
    //     fetch(url, {
    //         method: "PUT",
    //         body: JSON.stringify(Data),
          
    //         headers: {
    //             "Content-type":  "application/json;charset=UTF-8"
    //         }
    //     }) .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({ empData:data });
    //         // console.log(this.state.empData)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });

        // fetch("http://localhost:3000/Employee/4", {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({ empData: data });
        //         console.log(this.state.empData)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });
            
    }
    render() {
        return (
            <div>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>age</th>
                        <th>salary</th>
                    </tr>
                    </thead>
                    {
                        this.state.empData.map(e =>
                    <tbody>
                            <tr>
                                <td>{e.Ename}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                                <td>{e.Age}</td>
                                <td>{e.Salary}</td>
                            </tr>
                    </tbody>
                        )
                    }
                </table>
            </div>
        )
    }
}

export default Employee
