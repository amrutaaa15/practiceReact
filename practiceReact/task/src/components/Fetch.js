// import React, { Component } from 'react';
// import comments from './Comments'

// export class Fetch extends Component {
//     constructor(){
//         super()
//         this.state={details:[],comments:[]}
//     }
//     componentDidMount(){

//         const url="https://jsonplaceholder.typicode.com/users";
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>{
//         console.log(data); 
//         this.setState({details:data});
//         })
//         .catch((err)=>{
//             console.log(err)
//         });

//         const urls="https://jsonplaceholder.typicode.com/comments";
//         fetch(urls)
//         .then(res=>res.json())
//         .then(data=>{
//         console.log(data); 
//         this.setState({comments:data});
//         })
//         .catch((err)=>{
//             console.log(err)
//         });


//     }
//     render() {
//         return (
//             <>
//                 <table border="3">
//                     <tr>
//                     <th>Name</th>
//                     <th>username</th>
//                     <th>email</th>
//                     <th>address Street</th>
//                     <th>address suite</th>
//                         </tr>
//                 {this.state.details.map((user)=>
//                 <tr>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                     <td>{user.address.street}</td>
//                     <td>{user.address.suite}</td>
                 
//                 </tr>
//                     )}
//                     </table>

                    
//                     <Component datas={this.state.comments}/>
//         </>
//         )
//     }
// }

// export default Fetch
