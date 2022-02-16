import React, { Component } from 'react';
import data from './login.json'

export class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            alertMessage: '',
            data:{
                email:"amrutakhamkar15@gmail.com",
                password:"Amruta@15"
            }

        }
    }
    handler1 = ((event) => {
        this.setState({
            email: event.target.value
        })
    })
    handler2 = ((event) => {
        this.setState({
            password: event.target.value
        })
    })

    submit = (() => {
        console.log(this.state.email)
        console.log(data.login.password)
        if ((this.state.email == this.state.data.email) && (this.state.password == this.state.data.password)) {
            this.state.errorMessage = "";
            this.state.alertMessage = "great form submitted"
        }
        else {
            this.state.errorMessage = "no";
            this.state.alertMessage = "Not Submitted"
        }

        if (this.state.errorMessage == "") {
            document.getElementById("alert").innerHTML = `
            <div class="alert alert-success"" role="alert">
               ${this.state.alertMessage}
            </div>`
        }
        else {
            document.getElementById("alert").innerHTML = `
            <div class="alert alert-danger" role="alert">
            ${this.state.alertMessage}
            </div>`

        }
    })


    render() {
        console.log(data.login)
        return (
            <>
                <div id="alert"></div>
                Email : <input type="email" onChange={this.handler1} name="" id="" /><br></br>
                Password :<input type="password" onChange={this.handler2} name="" id="" /><br></br>
                <button onClick={this.submit}>Submit</button>
            </>
        )
    }
}

export default Task
