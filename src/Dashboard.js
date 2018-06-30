import React from 'react';
import { Link, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './Auth.redux';

function Team2() {
  return <h2>Team2</h2>
}

function Team3() {
  return <h2>Team3</h2>
}

@connect(
  state => state.auth,
  {logout}
)
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>Team1</Link>
          </li>
          <li>
            <Link to='/dashboard/team2'>Team2</Link>
          </li>
          <li>
            <Link to='/dashboard/team3'>Team3</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/team2' component={Team2}></Route>
        <Route path='/dashboard/team3' component={Team3}></Route>
      </div>
    )

    return this.props.isAuth ? app: redirectToLogin;
  }
}

export default Dashboard
