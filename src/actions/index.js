import {push} from 'redux-little-router';

export function navigateAbout() {
  return (dispatch) => {
    dispatch(push('/about'))
  }
}

export function navigateQuery(string) {
  return (dispatch) => {
    dispatch(
      push({
        pathname: `/query`,
        query: {
          string: string
        }
      })
    )
  }
}
