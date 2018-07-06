import React from 'react';
import Logo from '../../component/logo/logo';
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';

@connect(
  state => state.user,
  { register }
)
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatPwd: '',
      role: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    this.props.register(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          {this.props.msg?<p className="error-msg">{this.props.msg}</p> : null}
          <InputItem
            onChange={v => this.handleChange('user', v)}
          >Username</InputItem>
          <InputItem
            type='password'
            onChange={v => this.handleChange('pwd', v)}
          >Password</InputItem>
          <InputItem
            type='password'
            onChange={v => this.handleChange('repeatPwd', v)}
          >Repeat pwd</InputItem>
          <RadioItem
            checked={this.state.role == 'genius'}
            onChange={() => this.handleChange('role', 'genius')}
          >
            Genius
          </RadioItem>
          <RadioItem
            checked={this.state.role == 'boss'}
            onChange={() => this.handleChange('role', 'boss')}
          >
            Boss
          </RadioItem>
          <WhiteSpace/>
          <WingBlank>
            <Button type="primary" onClick={this.handleRegister}>Sign up</Button>
          </WingBlank>
        </List>
      </div>
    )
  }
}

export default Register;
