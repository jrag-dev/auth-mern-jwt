import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import './Auth.scss'
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';


const initialState = {
	email: '',
	password: ''
}


export function LoginPage () {
	const [dataForm, setDataForm] = useState(initialState)
	const { firstname, lastname, email, password } = dataForm;
	
	const { user, error, loginUserFn } = useContext(AuthContext)
	
	let navigate = useNavigate()
	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get('redirect');
	const redirect = redirectInUrl ? redirectInUrl : '/';

	useEffect(() => {
		if (user) {
			toast.success(`Welcome, ${user.firstname}`)
			navigate( redirect || '/')
		}

		if (error) {
			toast.error(error)
			return;
		}
	}, [user, error])

	const handleChange = (event) => {
		setDataForm({
			...dataForm,
			[event.target.name]: event.target.value
		})
		console.log(event.target.value)
	}

	const handleSubmitLogin = (event) => {
		event.preventDefault()

		// validaciones
		
		// pasar data al action
		loginUserFn(dataForm)
		
		// resetear dataForm
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