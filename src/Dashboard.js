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
    const match = this.props.match
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        {this.props.isAuth ? <button onClick={this.props.logout}>logout</button> : null}
        <ul>
          <li>
            <Link to={`${match.url}/`}>Team1</Link>
          </li>
          <li>
            <Link to={`${match.url}/team2`}>Team2</Link>
          </li>
          <li>
            <Link to={`${match.url}/team3`}>Team3</Link>
          </li>
        </ul>
        <Route path={`${match.url}/`} exact component={App}></Route>
        <Route path={`${match.url}/team2`} component={Team2}></Route>
        <Route path={`${match.url}/team3`} component={Team3}></Route>
      </div>
    )

    return this.props.isAuth ? app: redirectToLogin;
  }
}

export default Dashboard
