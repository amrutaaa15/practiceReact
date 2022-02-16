import React, { Component } from 'react'
import json from './Products.json';

const  ProductComponent=()=>{

    export class  extends Component {
        
    
        render() {
            return (
                <div className="row container justify-center">
                {json.Products.map(data=>
                <div className="col-sm-4">                
                <div class="card bg.light">
                <div class="card-body">
                    <img class="card-img-top" height=" 300px" src={`./myimages/${data.imgsrc}`} alt="image not found"></img>
                    <p class="card-title">{data.pname}</p>
                    <p class="card-text">
                        Price : <span style={{color:"red",fontSize:"large",fontWeight:"bold"}}>${data.price}</span><br/>
                        Quantity: {data.quantity} remaining                   
                    </p>
                </div>             
            </div> 
            </div>) } 
            </div>  
            )
    }
    }
}

export default ProductComponent;
