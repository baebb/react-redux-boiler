import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import { initializeCurrentLocation, RouterProvider } from 'redux-little-router';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const store = configureStore();
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
  <RouterProvider store={store}>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>,
  document.querySelector('.app-container')
);