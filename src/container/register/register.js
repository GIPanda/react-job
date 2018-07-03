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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'genius'
    }
  }

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>Username</InputItem>
          <InputItem>Password</InputItem>
          <InputItem>Repeat pwd</InputItem>
          <RadioItem checked={this.state.role == 'genius'}>
            Genius
          </RadioItem>
          <RadioItem checked={this.state.role == 'boss'}>
            Boss
          </RadioItem>
          <WhiteSpace/>
          <WingBlank>
            <Button type="primary">Sign up</Button>
          </WingBlank>
        </List>
      </div>
    )
  }
}

export default Register;
