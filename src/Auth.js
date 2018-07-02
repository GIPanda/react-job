import React from 'react';
import { connect } from 'react-redux';
import { login, getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

@connect(
  state => state.auth,
  {login, getUserData}
)
class Auth extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {}
  //   }
  // }
  //
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
        <div>
          <h2>My name is {this.props.name}, age {this.props.age}</h2>
          { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
          <button onClick={this.props.login} >Login</button>
        </div>
    )
  }
}

export default Auth
