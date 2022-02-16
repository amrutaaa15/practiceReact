import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add'
import { Edit } from './Components/Edit';
// import About from './Components/About';
// import Menus from './Components/Menus';
import Contact from './Components/Contact';
import EmpDetails from './Components/EmpDetails';
import Nesting from './Components/Nesting';
// import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Router>
         <nav class="nav bg-dark py-3 justify-content-center">
    <li class="nav-item">
    <li><Link  class="nav-link active" style={{color:"white"}}to="/">Home</Link></li>
    </li>
    <li class="nav-item">
    <li><Link  class="nav-link" style={{color:"white"}}to="/add">Add</Link></li>
    </li>
    <li class="nav-item">
    <li> <Link  class="nav-link" style={{color:"white"}}to="/">Edit</Link></li>
    </li>
    
    <li class="nav-item">
    <li> <Link  class="nav-link" style={{color:"white"}}to="/contact">Contact</Link></li>
    </li>
    
  </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={Add} />
          <Route path="/edit" exact component={Edit} />
          <Route path="/contact"  component={Contact} />  
          <Route path="/details/:id"  component={EmpDetails} />  
        </Switch>
      </Router>
    </>
   
  );
}

export default App;