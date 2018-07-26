import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {NavBar} from 'antd-mobile';
import NavLinkBar from '../nav-link-bar/nav-link-bar';
import Boss from '../boss/boss';
import Genius from '../genius/genius';
import User from '../user/user';

function Message() {
  return <h2>Message page</h2>
}

@connect(
  state => state
)
class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {pathname} = this.props.location;
    const user = this.props.user;
    const navList = [
      {
        path: '/boss',
        text: 'Genius',
        icon: 'boss',
        title: 'Genius list',
        component: Boss,
        hide: user.role === 'genius'
      },
      {
        path: '/genius',
        text: 'Boss',
        icon: 'job',
        title: 'Boss list',
        component: Genius,
        hide: user.role === 'boss'
      },
      {
        path: '/msg',
        text: 'Message',
        icon: 'msg',
        title: 'Message list',
        component: Message,
      },
      {
        path: '/me',
        text: 'Me',
        icon: 'msg',
        title: 'Me',
        component: User,
      }
    ];

    return (
      <div>
        <NavBar className="fixed-top" mode='dark'>{navList.find(v=> v.path === pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }

}

export default Dashboard;
