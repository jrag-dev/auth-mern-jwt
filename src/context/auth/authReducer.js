import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	LOGOUT_SESSION
} from '../../types'

export default (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			localStorage.setItem('user', JSON.stringify(action.payload.user))
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				error: null,
				loading: false
			}
		case REGISTER_ERROR:
			return {
				...state,
				token: null,
				user: null,
				error: action.payload,
				loading: false
			}
		case LOGOUT_SESSION:
			localStorage.removeItem('token')
      localStorage.removeItem('user')
			return {
				...state,
				token: null,
				user: null,
				error: null,
				loading: false
			}
		default:
			return state;
	}
}