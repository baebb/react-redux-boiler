import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import {Provider} from 'react-redux';
import configureStore from './store.js';
import {initializeCurrentLocation, RouterProvider} from 'redux-little-router';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const store = configureStore();
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
};

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App />
    </RouterProvider>
  </Provider>,
  document.querySelector('.app-container')
);