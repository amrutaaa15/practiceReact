import { Component } from "react"

const HocCounter=(WrappedComponent,data)=>{

    return class extends Component{
        constructor(props){
            super(props);
            this.state={count:data};
        };
        
       handleClick=()=>{
            this.setState({
               count: this.state.count+1
            })
            
        }
        render(){
        //    { console.log(this.state.count)}
            return <WrappedComponent countNumber={this.state.count} handleClick={this.handleClick}/>
        }
    }
}
export default HocCounter;