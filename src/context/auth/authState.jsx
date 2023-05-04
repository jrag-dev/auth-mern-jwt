import { useReducer } from 'react'

import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	LOGOUT_SESSION
} from '../../types'

import AuthContext from './authContext'
import authReducer from './authReducer'
import clientAxios from '../../config/axios'


const AuthState = ({ children }) => {
	
	const initialState = {
		token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
		user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
		error: null,
		loading: true,
	}
	
	const [state, dispatch] = useReducer(authReducer, initialState)
	
	// Functions that modifier the state
	
	const registerUserFn = async (data) => {
		try {
			const resp = await clientAxios.post('/auth/register', data)
			dispatch({
				type: REGISTER_SUCCESS,
				payload: resp.data
			})
		} catch (err) {
			console.log(err.response.data.error)
			dispatch({
				type: REGISTER_ERROR,
				payload: err.response.data.error
			})
		}
	}
	
	const logoutSession = () => {
		dispatch({
			type: LOGOUT_SESSION
		})
	}
	
	const datos = {
		token: state.token,
		user: state.user,
		error: state.error,
		loading: state.loading,
		registerUserFn,
		logoutSession
	}
	
	return (
		<AuthContext.Provider value={datos}>
			{ children }
		</AuthContext.Provider>	
	)
}

export default AuthState