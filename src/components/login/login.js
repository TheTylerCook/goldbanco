import React, { Component } from 'react';
import './login.css';
import logo from './communityBank.svg';
export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <img src={ logo } />
         <a href={process.env.REACT_APP_LOGIN}><button type='' className='loginButton'>Login</button></a> 
      </div>
    )
  }
}


/* <a href='http://localhost:3111/auth'><button type='' className='loginButton'>Login</button></a>  */