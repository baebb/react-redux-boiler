import {STORE_QUERY} from '../actions/index';

const INIT_STATE = {queryStore: []};

export default function (state = INIT_STATE, action) {
  // console.log(action.payload);
  switch(action.type) {
    case STORE_QUERY:
      return {
        ...state,
        queryStore: [...state.queryStore, action.payload],
      };
    default:
      return state;
  }
}