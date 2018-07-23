import React from 'react';
import axios from 'axios';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'

class Boss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/user/list?role=genius')
      .then(res => {
        if (res.data.code === 0) {
          this.setState({data: res.data.data})
        }
      });
  }
  render() {
    const Header = Card.Header;
    return (
      <WingBlank>
        {this.state.data.map(v => (
          v.avatar ?
          <Card key={v._id}>
            <Header
              title = {v.username}
              thumb = {require(`../img/${v.avatar}.png`)}
              extra = {<span>{v.title}</span>}
            ></Header>
          </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default Boss;
