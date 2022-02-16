import logo from './logo.svg';
import Home from './components/Home'
import MyClass from './components/MyClass';
import Events from './components/Events';
import Sum from './components/Sum';
import Person from './components/Person';
import ToDo from './components/ToDo';
// import Anu from './components/Anu'
import ProductComponent from './ProductComponent';
import Cards from './Cards';
import './App.css';
import Counter from './components/Counter';

function App() {

  const company = "Neosoft Technologies";
  const tc = ["React Js", "Angular", "Vue", "Node"];
  const products = [
    { pid: 1,pname:"nike",price:3999,quantity:3,features:"Sports shoes" },
    { pid: 2,pname:"sneakers",price:999,quantity:3,features:"outing shoes" },
    { pid: 3,pname:"puma",price:1999,quantity:3,features:"treking shoes" },
    { pid: 4,pname:"adidas",price:2999,quantity:3,features:"running shoes" }
  ]
  const myClick=(data)=>{
    alert(data)
  }
  return (
    <div className="App">
      <ProductComponent/>
      {/* <Cards/> */}
      {/* <h1>{company}</h1>
            <MyClass/>
     
            <hr/> */}
            {/* <Home technologies={tc} productData={products} /> */}
            {/* <Events/> */}
            {/* <ul>
              {products.map((p,ind)=>
                <li key={ind}>{p.pid}</li>
              )}
           </ul> */}
      
            {/* <ToDo/> */}
             
            {/* <Sum/> */}
            {/* <Anu/> */}
            {/* <hr/>
            <Person name="Amruta" age="22" action={()=>{myClick("sonu")}}>
            Hie I am Amruta
            <p>Hey</p>
            </Person>
            <Counter/> */}
     
    </div>
  );
}

export default App;
