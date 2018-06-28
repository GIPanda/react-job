import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));

ReactDOM.render(
  (<Provider store={store}>
    <App/>
  </Provider>),
  document.getElementById('root')
);

registerServiceWorker();
