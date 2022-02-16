import React, { Component } from 'react'

export class Events extends Component {

    constructor(props){
        super(props);
        this.state={fname:"Amruta"}
    }

    handler=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <h1>Events</h1>
                <input name="fname" type="text" onChange={this.handler}></input>
                <p>{this.state.fname}</p>
            </div>
        )
    }
}

export default Events;
