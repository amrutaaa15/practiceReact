import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Router, Route} from 'react-router';
import { Link } from 'react-router-dom';
import About from './About';
import { Contact } from './Contact';
import Home from './Home';
import Menus from './Menus';
import NotFound from './NotFound';

export class Render extends Component {
    render() {
        return (
            <>
                <Router>
                  <li><Link to="/"></Link>Home</li>
                  <li><Link to="/about"></Link>About</li>
                  <li><Link to="/menues"></Link>Menues</li>
                  <li><Link to="/contact"></Link>Contact</li>

                <Switch>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/about" exact Component={About}/>
                    <Route path="/menues" exact Component={Menus}/>
                    <Route path="/contact" exact Component={Contact}/>
                    <Route Component={NotFound}/>
                </Switch>
                </Router>
            </>
        )
    }
}

export default Render
