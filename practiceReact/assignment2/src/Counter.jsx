import react ,{Component} from "react";

import HocCounter from "./hoc/HocCounter";

class Counter extends Component{
    
      
        render(){
            return (
                <div>
                  {console.log(this.props.countNumber)}
                    <h1>{this.props.countNumber}</h1>
                    <button onClick={this.props.handleClick}>Count</button>
                </div>
            )
        }
    
}

const MyCounter=HocCounter(Counter,3);
export default MyCounter;

