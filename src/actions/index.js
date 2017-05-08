import {PUSH} from 'redux-little-router';

export function navigateAbout() {
	return {
		type: PUSH,
		payload: {
			pathname: '/about?ayy=lmao',
			// query: {
			// 	ayy: 'lmao'
			// }
		}
	}
}

export function navigateCount(number) {
	return {
		type: PUSH,
		payload: {
			pathname: `/count?number=${number}`,
			query: {
				number: number
			}
		}
	}
}
