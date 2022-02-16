// import { Component } from "react"

// const HocComment=(WrappedComponent,data)=>{

//     return class extends Component{
//         constructor(props){
//             super(props);
//             this.state={count:data,comments:[]};
//         };
        
//        handleClick=()=>{
//             this.setState({
//                count: this.state.count+1,
//             })  
//         }

//         handler = (event) => {
//            this.setState({
//                comm:event.target.value
//            })
//            console.log(comm)
//         };
    

//         Add=()=>{
//             let comments=this.state.comments;
//             this.setState({
//                 comments:[...comments,comm]
//             })
//         }
//         render(){
//         //    { console.log(this.state.count)}
//             return <WrappedComponent countNumber={this.state.count} handleClick={this.handleClick} change={this.handler}/>
//         }
//     }
// }
// export default HocComment;