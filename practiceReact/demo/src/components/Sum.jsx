import React, { Component } from 'react'

export class Sum extends Component {

    constructor(props){
        super(props);
        this.state={
            num1:' ',
            num2:' ',
            sum:' ',
    }
    }

    handler=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value})
    }

    clickk=()=>{
        this.setState({sum:parseInt(this.state.num1)+parseInt(this.state.num2)});
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <h1>Addition</h1>
                <input name="num1" type="text" onChange={this.handler}  ></input>
                <input name="num2" type="text" onChange={this.handler} ></input>

                <button onClick={this.clickk}>Sum</button>
                <p>The sum is {this.state.sum}</p>
            </div>
        )
    }
}

export default Sum;
