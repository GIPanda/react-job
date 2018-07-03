import React from 'react';
import Logo from '../../component/logo/logo';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>Sign in</h2>
        <WingBlank>
          <List>
            <InputItem>Username</InputItem>
            <InputItem>Password</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'>Sign in</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>Sign up</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
