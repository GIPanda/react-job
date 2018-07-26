import React from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

class UserCards extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  render() {
    console.log(this.props.userList);
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.props.userList.map(v => (
          v.avatar ?
          (<Card key={v._id}>
            <Header
              title = {v.username}
              thumb = {require(`../img/${v.avatar}.png`)}
              extra = {<span>{v.title}</span>}
            ></Header>
            <Body>
              {v.role === 'boss' ? (<div>Comapny : {v.company}</div>) : null}

              {v.desc = v.desc ? v.desc : ''}
              {v.desc.split('\n').map(d => (
                <div key={d}>{d}</div>
              ))}
              {v.role === 'boss' ? (<div>Salary : {v.salary}</div>) : null}
            </Body>
          </Card>) : null
        ))}
      </WingBlank>
    )
  }
}

export default UserCards;
