import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/login/login';
import Private from './components/private/private';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Route path='/' component={ Login } exact />
        <Route path='/private' component={ Private }/>
       </div>
      </HashRouter>
    );
  }
}

export default App;


// npm i react-router-dom axios redux react-redux redux-promise-middleware
//import HashRouter, Route

