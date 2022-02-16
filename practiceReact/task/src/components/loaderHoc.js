import React,{Component} from 'react';
const WithLoading=(Component)=>{
    return class extends Component{
        
        render(){
            return (
                <>
                {!this.props.dataLoaded?
                <Component {...this.props}/> :
                <img src="../Imgs/load.png" style={{width:"100px",height:"100px",position:"relative",left:"700px",top:"12px"}}></img>
                }
                </>
            )
        }
    }
}
export default WithLoading;