// import React, { Component } from 'react'
// import Buttons from './Buttons';

// export class Anu extends Component {
//     constructor(props){
//         super(props);
//         this.states={num1:'',num2:'',sum:''}
//     }
//     handler=(event)=>{
//         let {name,value}=event.target;
//         this.setState({[name]:value});
//         console.log(this.state)
//     }
//     Add=()=>{
//         this.setState({sum:parseInt(this.state.num1)+parseInt(this.state.num2)});

//         console.log(this.state)
//     }
//     render() {
//         return (
//             <div>
//                 <h2 className="heading"> Sum of two numbers </h2>
//                 Enter Num1: <input type="text" name="num1" onChange={this.handler}/><br/>
//                 Enter Num2: <input type="text" name="num2" onChange={this.handler}/><br/>
//                 <button onClick={this.Add}>Sum</button>
//                 <p>Sum is {this.state.sum}</p>
//             </div>
//         )
//     }
// }

// export default Anu;