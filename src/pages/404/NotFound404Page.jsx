import { useRouteError, useNavigate } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

import './NotFound404Page.scss'

export function NotFound404Page () {
	const { user } = useContext(AuthContext)
	let navigate = useNavigate()
	
	const error = useRouteError();
	console.error(error);
	
	const verifyLoginAndReturn = () => {
		if (!user) {
			navigate('/')
		} else {
			history.go(-1)
		}
	}
	
	return (
		<div id="error-page">
			<h2>Oops!</h2>
			<p className="error-message">Sorry, an unexpected error has occurred.</p>
			<div className="error-status">
				<p className="status">
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</p>
				<p>{error.statusText} Page</p>
				<button onClick={verifyLoginAndReturn}>Volver</button>
			</div>
		</div>
	)
}