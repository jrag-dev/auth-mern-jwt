import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export function HomePage () {
	const { user } = useContext(AuthContext)
	let navigate = useNavigate()
	
	useEffect(() => {
		if (!user) {
			navigate('login')
		}
	}, [])

	return (
		<div>
			Home Page
		</div>
		)
}