import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Result} from 'antd-mobile';

@connect(
  state => state.user
)
class User extends React.Component {
  componentDidMount() {

  }
  render() {
    const props = this.props;
    console.log(props);
    return props.username ? (
      <div>
        <Result
          img={<img src={require(`../img/${this.props.avatar}.png`)} alt="" />}
          title={this.props.username}
        />
      </div>
    ) : null
  }
}

export default User;
