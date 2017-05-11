// import {GET_CONTENT} from '../actions/index';

const INIT_STATE = {pastQueries: []};

export default function (state = INIT_STATE, action) {
  // console.log(action.payload);
  switch(action.type) {
    // case GET_CONTENT:
    //   return {
    //     ...state,
    //     currentContentTitle: action.payload.title,
    //     currentContent: action.payload.content
    //   };
    default:
      return state;
  }
}