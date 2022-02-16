import './App.css';
import React,{Component}  from 'react';
import Xyz from './components/Xyz';
import Product from './components/Product'
import loaderHoc from './components/loaderHoc';
import Task from './components/Task';
import Session from './components/Session';
import Error from './Error';
import Fetch from './components/Fetch';
import Employee from './components/Employee';
import Details from './components/Details';
import Axios from './components/Axios'
import Async from './components/Async';
import { Incep } from './components/Incep';
// const LoadProducts=loaderHoc(Product);
// class App extends Component{
//   constructor(props){
//     super(props);
//        this.state={loaded:true};
//   }

//   componentDidMount(){
//      setTimeout(()=>{
//          this.setState({loaded:false})
//      },5000)
//   }

//   render(){
//   return (
//     <div>
//        {/* <LoadProducts dataLoaded={this.state.loaded}/> */}
//       <Task/>
//     </div>
//   );
//   }
// }
const App=((props)=>{
  return(
    <>
   {/* <Product/>
      <Error>
    <Session/>
    </Error>
   <Fetch/>
   <Employee/>
   <Details/>
    <Axios/> */}
    {/* <Async/> */}
    <Incep/>

    </>

  )
})

export default App;
