import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import './index.scss'
import Home from '../components/Home/home';
import Login from '../components/Login/login';
import Regist from '../components/Regist/regist';

class IndexRouter extends Component {
  render() {
    return (
      <Router>
        <div className="IndexRouter">
          {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/regist">Regist</Link></li>
          </ul>
    
          <hr/> */}
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/regist" component={Regist}/>
        </div>
      </Router>
    );
  }
}

export default IndexRouter;