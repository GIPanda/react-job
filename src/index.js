import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/boss-info/boss-info';
import GeniusInfo from './container/genius-info/genius-info';
import Dashboard from './component/dashboard/dashboard';
import AuthRoute from './component/auth-route/auth-route';
import reducers from './reducer';
import './config';
import './style.css';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function Boss() {
  return <h2>Boss page</h2>
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path='/genius-info' component={GeniusInfo}></Route>
          <Route path='/boss-info' component={BossInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();
