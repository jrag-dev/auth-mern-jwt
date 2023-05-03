import { useState } from 'react'

import './Auth.scss'


const initialState = {
	email: '',
	password: ''
}


export function LoginPage () {
	const [dataForm, setDataForm] = useState(initialState)
	const { firstname, lastname, email, password } = dataForm;


	const handleChange = (event) => {
		setDataForm({
			...dataForm,
			[event.target.name]: event.target.value
		})
		console.log(event.target.value)
	}

	const handleSubmitLogin = (event) => {
		event.preventDefault()

		console.log(dataForm)
	}
	
	return (
		<section className="auth">
			<form
				className="auth-form"
				onSubmit={handleSubmitLogin}
				>
				<h2 className="auth-title">Login</h2>
				<p>SignIn in MernApp</p>

				<div className="form_group">
					<label htmlFor="email">Email</label>
					<input
						className="form-input"
						name="email"
						type="email"
						id="email"
						placeholder="Enter your email"
						onChange={handleChange}
						value={email}
					/>
				</div>
				<div className="form_group">
					<label htmlFor="password">Password</label>
					<input
						className="form-input"
						name="password"
						type="password"
						id="password"
						placeholder="Enter your password"
						onChange={handleChange}
						value={password}
					/>
				</div>
				<button className="btn-auth" type="submit">Login</button>

				<div>
					<p></p>
				</div>
			</form>
		</section>
	)
}