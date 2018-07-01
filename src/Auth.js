import React from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
import { Redirect } from 'react-router-dom';

@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
          <h2>Permission error, please login</h2>
          <button onClick={this.props.login} >Login</button>
        </div>
    )
  }
}

export default Auth
