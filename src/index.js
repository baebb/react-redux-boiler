import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import { initializeCurrentLocation } from 'redux-little-router';

const store = configureStore();
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app-container')
);