import React, { Component } from 'react'

export class EmpDetails extends Component {
    state={
        proData:'',
        id:this.props.match.params.id

    }
    componentDidMount = async () => {
        try {
            const URL = `http://localhost:3000/Employee/${this.state.id}`;
            const res = await fetch(URL);
            const resData = await res.json();
            this.setState({ proData: resData })
        }
        catch (err) {
            console.log(err)
        }

    }
    render() {
        let id=this.state.id
        return (
            <div>
              { console.log(this.state.proData)}
                <h1>Employee Details {this.state.id}</h1>
                <h3>{this.state.proData.email}</h3>
                <h3>{this.state.proData.Ename}</h3>
                <h3>{this.state.proData.Gender}</h3>
                <h3>{this.state.proData.Salary}</h3>
            </div>
        )
    }
}

export default EmpDetails
