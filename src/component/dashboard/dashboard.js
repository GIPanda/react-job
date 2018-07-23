import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {NavBar} from 'antd-mobile';
import Boss from '../boss/boss';
import NavLinkBar from '../nav-link-bar/nav-link-bar';

function Genius() {
  return <h2>Genius page</h2>
}

function Message() {
  return <h2>Message page</h2>
}

function User() {
  return <h2>User</h2>
}

@connect(
  state => state
)
class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const pathname = this.props.location.pathname;
    console.log(pathname);
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
