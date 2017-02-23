import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import Thunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [Thunk];

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.querySelector('.container'));