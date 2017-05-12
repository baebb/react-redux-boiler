import {combineReducers} from 'redux';

import queryReducer from './reducer_queries';

const rootReducer = combineReducers({
  queries: queryReducer
});

export default rootReducer;
