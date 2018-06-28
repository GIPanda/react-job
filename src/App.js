import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync} from './index.redux';
import './App.css';
import { Button, List } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Now we have {this.props.num} guns</h2>
        <Button onClick={this.props.addGun}>Add gun</Button>
        <Button onClick={this.props.removeGun}>Remove gun</Button>
        <Button onClick={this.props.addGunAsync}>Add gun in 2 seconds</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {num: state}
}
const actionCreators = { addGun, removeGun, addGunAsync}

App = connect(mapStateToProps, actionCreators)(App);
export default App;
