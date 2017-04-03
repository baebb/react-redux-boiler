import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware, ConnectedRouter, syncHistoryWithStore} from 'react-router-redux';
import Thunk from 'redux-thunk';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import Routes from './routes';
import reducers from './reducers';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [Thunk, routerMiddleware(history)];

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={Routes} />
  </Provider>
  , document.querySelector('.app-container'));