import { push } from 'redux-little-router';

export const STORE_QUERY = 'STORE_QUERY';

const navigateAbout = () => {
  return (dispatch) => {
    dispatch(push('/about'))
  }
};

const navigateQuery = (string) => {
  return (dispatch) => {
    dispatch(storeQuery(string));
    dispatch(
      push({
        pathname: `/query`,
        query: {
          string: string,
        },
      })
    )
  }
};

const storeQuery = (query) => {
  return {
    type: STORE_QUERY,
    payload: query
  }
};

export {
  navigateAbout,
  navigateQuery,
  storeQuery
}