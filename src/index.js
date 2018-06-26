import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { counter, addGun, removeGun, addGunAsync } from './index.redux';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function render() {
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'));
}
render();
store.subscribe(render);

registerServiceWorker();
