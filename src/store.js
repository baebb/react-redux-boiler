import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {routerForBrowser} from 'redux-little-router';

import rootReducer from './reducers';
const routes = {
  '/': {
    title: 'Home',
  },
  '/about': {
    title: 'About',
  },
	'/count': {
		title: 'Count',
	}
};

const {reducer, middleware, enhancer} = routerForBrowser({routes});

const composedMiddleware = [
  applyMiddleware(thunk, middleware),
];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__
  && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default function configureStore(initialState) {
  return createStore(
    
    combineReducers({router: reducer}),
    initialState,
    compose(enhancer, ...composedMiddleware)
  )
}