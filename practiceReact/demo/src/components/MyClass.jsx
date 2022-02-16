import react ,{Component} from "react";
import App from "../App";
class MyClass extends Component{
    constructor(props){
        super(props);
        this.state={name:"Amruta",age:22};
    };
   

     
        updateData=()=>{
            this.setState({name:"Amar"});
        };

      

        render(){
            return (
                <div>
                    <h1 >My Copmany is {this.props.company}</h1>
                    <p>My name is {this.state.name} and my age is {this.state.age}</p>
                    <button onClick={this.updateData}>Update</button>
                </div>
            )
        }
    
}

export default MyClass;

