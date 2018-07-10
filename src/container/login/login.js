import React from 'react';
import Logo from '../../component/logo/logo';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: ''
    };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  register() {
    this.props.history.push('/register')
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleLogin() {
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className="error-msg">{this.props.msg}</p> : null}
            <InputItem
              onChange={v => this.handleChange('username', v)}
            >Username</InputItem>
            <InputItem
              onChange={v => this.handleChange('pwd', v)}
              type='password'
            >Password</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type='primary'>Sign in</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>Sign up</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
