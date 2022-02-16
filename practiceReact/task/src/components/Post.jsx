import React, { Component } from 'react'
import json from '../components/Products.json'
// let count=0;
export class Product extends Component {

    constructor(props) {
        super(props);
        this.state={productData:[],l:0}
    }

    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users";
                fetch(url)
                .then(res=>res.json())
                .then(data=>{
                console.log(data); 
                this.setState({details:data});
                })
                .catch((err)=>{
                    console.log(err)
                });
    }
    addCard = (id) => {
        let l=this.state.l
        if (localStorage.getItem('myCart') != undefined) {
            let arr = JSON.parse(localStorage.getItem('myCart'));
            if (arr.includes(id)) {
                alert("product already added")
            }
            else {
                arr.push(id);
                localStorage.setItem('myCart', JSON.stringify(arr));
                console.log(this.state.l);
                this.setState({l:arr.length});
                alert("product added");
            }
        }
        else {
            let arr = [];
            arr.push(id);
            localStorage.setItem('myCart', JSON.stringify(arr));
            this.setState({l:arr.length})
            alert("product added")
        }
    }
    render() {
        return (
            <div>    
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cart {this.state.l}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Contact</a>
              </li>
            </ul>
                {this.state.productData.map(json =>
                    <div class="card-body block">
                        <img class="card-img-top imgs" height=" 300px" src={`./myimages/${json.imgsrc}`} alt="image not found"></img>
                        <h4 class="card-title">{json.ProductName}</h4>
                        <p class="card-text">
                            Price : <span style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>${json.Price}</span><br />
                            Quantity: {json.Quantity} remaining
                        </p>
                        <a  onClick={() => this.addCard(json.id)} class="btn btn-primary">Add To Cart</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Product;
