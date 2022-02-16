import react ,{Component} from "react";
import Buttons from "./Buttons";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={counter:0,isLoggdIn:false};
    };

        updateCounter=()=>{
            this.setState({ counter: this.state.counter+ 1 })
        };

        AuthButton=()=>{
            let {isLoggdIn}=this.state;
            if(isLoggdIn){
                console.log("if")
                  return <button>SignIn</button>   
            }
            else{
                console.log("else")
                return <button>SignOut</button>
            }
        }
        render(){
            return (
                <div>
                   {this.AuthButton()}
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.updateCounter}>Count</button>
                    {/* <Buttons label="Update Data" action={this.updateCounter}/> */}
                </div>
            )
        }
    
}

export default Counter;

