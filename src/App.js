import React, { Component } from 'react';
import './App.css';
import  {createStore} from 'redux';
import { Button, List } from 'antd-mobile';

class App extends Component {
  render() {
    const store = this.props.store;
    const num = store.getState();
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <h2>Now we have {num} guns</h2>
        <Button onClick={()=>store.dispatch(addGun())}>Add gun</Button>
        <Button onClick={()=>store.dispatch(removeGun())}>Remove gun</Button>
        <Button onClick={()=>store.dispatch(addGunAsync())}>Add gun in 2 seconds</Button>
      </div>
    );
  }
}

export default App;
