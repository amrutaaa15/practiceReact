import react, {Component} from "react"


const Myhoc=(WrappedComponent)=>{

    return class extends Component{
        
        componentDidMount(){
            this.setState({
                data:"Hello hoc"
            })

        }
            render(){
                return <WrappedComponent {...this.props} {...this.state}/>
        }
    }
}
export default Myhoc;