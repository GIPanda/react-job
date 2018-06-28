import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function Team2() {
  return <h2>Team2</h2>
}

function Team3() {
  return <h2>Team3</h2>
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>Team1</Link>
          </li>
          <li>
            <Link to='/team2'>Team2</Link>
          </li>
          <li>
            <Link to='/team3'>Team3</Link>
          </li>
        </ul>
        <Route path='/' exact component={App}></Route>
        <Route path='/team2' component={Team2}></Route>
        <Route path='/team3' component={Team3}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();
