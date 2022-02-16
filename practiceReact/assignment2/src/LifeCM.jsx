import React, { Component } from 'react';
import data from './Products.json'

export class LifeCM extends Component {

    constructor(props){
        super(props)
        this.state={
            proData:[],
            age:18
        }
    }

    componentDidMount(){
        console.log(data.Products)
        this.setState({proData:data.Products})
    }

    componentDidUpdate(prevValue,prev){
        console.log(this.state.age);
        console.log(prev.age);

        console.log("changes");
        if(this.state.age!=prev.age){
            alert("age not equal")
        }
    }
    abc=(()=>{
        this.setState({age:21})
        console.log(this.state.age)
    })

    componentWillUnmount(){
        console.log("cleared")
    }
    render() {
        return (
            <div>
                <ul>
                {
                     this.state.proData.map((t) => {
                     return <li>{t.ProductName}</li>
                      } )
                }
                </ul>
                <input type="button" value="Update" onClick={this.abc} />
            </div>
        )
    }
}

export default LifeCM
