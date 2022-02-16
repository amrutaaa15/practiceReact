import { Component } from 'react';
import json from './Products.json'

class Cards extends Component {
    render() {
        return<>
    
           <div className="card featureCard mx-3 my-3" style={{width: "24rem"}}>
                <img src={this.props.img} className="card-img-top" alt="..."></img>
                <div className ="card-body">
                <p className ="card-title text-center mt-4">Id :{this.props.id}</p>
                <p className ="card-title text-center mt-4">Quantity :{this.props.quantity}</p>
                <p className ="card-title text-center mt-4">{this.props.tpName}</p>
                <p className ="card-text text-center text-danger">{this.props.price}</p>
                </div>
            </div>
    
           )
    </>

    }
}

export default Cards