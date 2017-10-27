import React, { Component } from 'react'
import axios from 'axios';
import { getUserInfo } from './../../ducks/users'
import { connect } from 'react-redux'

class Private extends Component {
constructor(props) {
    super(props)
    this.state = {
       
    }
}

componentDidMount() {
    this.props.getUserInfo();
}
bankBalance() {
    return Math.floor((Math.random() +1) + 5203000) * 10002000
}


  render() {
      const user = this.props.user;
    return (
        <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { user ? <img className='avatar' src={user.img} /> : null }
                <p>Username: { user ? user.user_name : null }</p>
                <p>Email: { user ? user.email : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <h4>Available balance: { user ? this.bankBalance() : null } </h4>
                <a href='http://localhost:3111/auth/logout'><button>Log out</button></a>
            </div> 
    )
  }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}
 export default connect(mapStateToProps, { getUserInfo })(Private);