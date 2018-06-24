import React, { Component } from 'react';
import './App.css';
import  {createStore} from 'redux';
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

class App extends Component {
  render() {
    const boss = 'gipanda';
    return (
      <div>
        <h2>Knights {boss}</h2>
        <Team1 leader='Patrick'></Team1>
        <Team2 leader='Frank'></Team2>
      </div>
    );
  }
}

function Team2(props) {
  return <h2>Team2 leader {props.leader}</h2>
}

class Team1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      soldiers: ['sd1', 'sd2', 'sd3']
    }
  }

  addSoldier = () => {
    console.log('hello add soldier');
    this.setState({
      soldiers: [...this.state.soldiers, 'new soldier' + Math.random()]
    })
  }

  render() {
    return (
      <div>
        <h2>Team1 leader of team one, {this.props.leader}</h2>
        <button onClick={this.addSoldier}>add member</button>
        <ul>
          {this.state.soldiers.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;