import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menus from './Components/Menus';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menues">Menues</Link></li>
          <li><Link to="/contact">Contactus</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/menues" exact component={Menus} />
          <Route path="/contact" exact component={Contact} />
          <Route Component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;