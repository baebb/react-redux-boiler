import { push } from 'redux-little-router';

export const STORE_QUERY = 'STORE_QUERY';

export function navigateAbout() {
  return (dispatch) => {
    dispatch(push('/about'))
  }
}

export function navigateQuery(string) {
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
}

export function storeQuery(query) {
  return {
    type: STORE_QUERY,
    payload: query
  }
}